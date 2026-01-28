```javascript
import { mockData } from './mockData.js';

let selectedPlan = null;
let generatedPaymentLink = null;

function init() {
  renderCompanyInfo();
  renderPricingPlans();
  attachEventListeners();
}

function renderCompanyInfo() {
  const companyName = document.getElementById('companyName');
  const companyDescription = document.getElementById('companyDescription');
  
  if (companyName) companyName.textContent = mockData.company.name;
  if (companyDescription) companyDescription.textContent = mockData.company.description;
}

function renderPricingPlans() {
  const plansContainer = document.getElementById('pricingPlans');
  if (!plansContainer) return;

  plansContainer.innerHTML = '';
  
  mockData.pricingPlans.forEach(plan => {
    const planCard = document.createElement('div');
    planCard.className = 'pricing-card';
    planCard.innerHTML = `
      <h3>${plan.name}</h3>
      <div class="price">${plan.price} ${plan.currency}</div>
      <p>${plan.description}</p>
      <ul class="features">
        ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
      </ul>
      <button class="btn-select-plan" data-plan-id="${plan.id}">Seç</button>
    `;
    plansContainer.appendChild(planCard);
  });
}

function attachEventListeners() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-select-plan')) {
      const planId = e.target.getAttribute('data-plan-id');
      selectPlan(planId);
    }
    
    if (e.target.id === 'generatePaymentLink') {
      generatePaymentLink();
    }
    
    if (e.target.id === 'processPayment') {
      processPayment();
    }
    
    if (e.target.id === 'copyPaymentLink') {
      copyPaymentLink();
    }
  });

  const customAmountInput = document.getElementById('customAmount');
  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      selectedPlan = null;
      document.querySelectorAll('.pricing-card').forEach(card => {
        card.classList.remove('selected');
      });
    });
  }
}

function selectPlan(planId) {
  const plan = mockData.pricingPlans.find(p => p.id === planId);
  if (!plan) return;

  selectedPlan = plan;
  
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  event.target.closest('.pricing-card').classList.add('selected');
  
  const customAmountInput = document.getElementById('customAmount');
  if (customAmountInput) {
    customAmountInput.value = plan.price;
  }
  
  showPaymentSection();
}

function showPaymentSection() {
  const paymentSection = document.getElementById('paymentSection');
  if (paymentSection) {
    paymentSection.style.display = 'block';
    paymentSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function generatePaymentLink() {
  const customAmount = document.getElementById('customAmount').value;
  const amount = customAmount || (selectedPlan ? selectedPlan.price : 0);
  
  if (!amount || amount <= 0) {
    showNotification('Lütfen geçerli bir tutar girin', 'error');
    return;
  }

  const linkDisplay = document.getElementById('paymentLinkDisplay');
  const linkSection = document.getElementById('linkSection');
  
  if (!linkDisplay || !linkSection) return;

  linkSection.style.display = 'block';
  linkDisplay.innerHTML = '<div class="loading">Link oluşturuluyor...</div>';

  setTimeout(() => {
    const uniqueId = generateUniqueId();
    generatedPaymentLink = `${mockData.company.paymentBaseUrl}/pay/${uniqueId}?amount=${amount}&currency=TRY`;
    
    linkDisplay.innerHTML = `
      <div class="payment-link-box">
        <input type="text" id="paymentLinkInput" value="${generatedPaymentLink}" readonly>
        <button id="copyPaymentLink" class="btn-copy"><i class="fas fa-copy"></i> Kopyala</button>
      </div>
    `;
    
    showNotification('Ödeme linki oluşturuldu', 'success');
  }, 1500);
}

function copyPaymentLink() {
  const linkInput = document.getElementById('paymentLinkInput');
  if (!linkInput) return;

  linkInput.select();
  linkInput.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(linkInput.value).then(() => {
    showNotification('Link kopyalandı', 'success');
  }).catch(() => {
    document.execCommand('copy');
    showNotification('Link kopyalandı', 'success');
  });
}

function processPayment() {
  const cardNumber = document.getElementById('cardNumber').value;
  const cardName = document.getElementById('cardName').value;
  const cardExpiry = document.getElementById('cardExpiry').value;
  const cardCvv = document.getElementById('cardCvv').value;
  const customAmount = document.getElementById('customAmount').value;

  if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
    showNotification('Lütfen tüm kart bilgilerini girin', 'error');
    return;
  }

  if (!customAmount || customAmount <= 0) {
    showNotification('Lütfen geçerli bir tutar girin', 'error');
    return;
  }

  const paymentButton = document.getElementById('processPayment');
  const originalText = paymentButton.innerHTML;
  
  paymentButton.disabled = true;
  paymentButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> İşleniyor...';

  setTimeout(() => {
    paymentButton.innerHTML = '<i class="fas fa-check"></i> Ödeme Başarılı!';
    paymentButton.classList.add('success');
    
    showNotification(`${customAmount} TRY tutarında ödeme başarıyla alındı`, 'success');
    
    displayPaymentReceipt(customAmount, cardNumber);

    setTimeout(() => {
      resetPaymentForm();
      paymentButton.disabled = false;
      paymentButton.innerHTML = originalText;
      paymentButton.classList.remove('success');
    }, 3000);
  }, 2000);
}

function displayPaymentReceipt(amount, cardNumber) {
  const receiptSection = document.getElementById('receiptSection');
  if (!receiptSection) {
    const section = document.createElement('div');
    section.id = 'receiptSection';
    section.className = 'receipt-section';
    document.getElementById('paymentSection').appendChild(section);
  }

  const receipt = document.getElementById('receiptSection') || document.createElement('div');
  const transactionId = generateUniqueId();
  const maskedCard = `**** **** **** ${cardNumber.slice(-4)}`;
  const timestamp = new Date().toLocaleString('tr-TR');

  receipt.innerHTML = `
    <div class="receipt-card">
      <div class="receipt-header">
        <i class="fas fa-check-circle"></i>
        <h3>Ödeme Başarılı</h3>
      </div>
      <div class="receipt-body">
        <div class="receipt-row">
          <span>Tutar:</span>
          <strong>${amount} TRY</strong>
        </div>
        <div class="receipt-row">
          <span>Kart:</span>
          <strong>${maskedCard}</strong>
        </div>
        <div class="receipt-row">
          <span>İşlem No:</span>
          <strong>${transactionId}</strong>
        </div>
        <div class="receipt-row">
          <span>Tarih:</span>
          <strong>${timestamp}</strong>
        </div>
        <div class="receipt-row">
          <span>Durum:</span>
          <strong class="status-success">Onaylandı</strong>
        </div>
      </div>
    </div>
  `;
  
  receipt.style.display = 'block';
}

function resetPaymentForm() {
  const form = document.querySelector('.payment-form');
  if (form) {
    form.querySelectorAll('input').forEach(input => {
      if (input.id !== 'customAmount') {
        input.value = '';
      }
    });
  }
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

function generateUniqueId() {
  return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
}

document.addEventListener('DOMContentLoaded', init);
```