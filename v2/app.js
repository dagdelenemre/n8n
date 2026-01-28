```javascript
import { mockData } from './mockData.js';

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderTransactions();
  renderBalanceChart();
  setupPaymentLink();
});

function renderDashboard() {
  document.getElementById('totalBalance').textContent = `${mockData.dashboard.totalBalance.toLocaleString('tr-TR')} ₺`;
  document.getElementById('todayRevenue').textContent = `${mockData.dashboard.todayRevenue.toLocaleString('tr-TR')} ₺`;
  document.getElementById('pendingPayments').textContent = mockData.dashboard.pendingPayments;
  document.getElementById('activeCards').textContent = mockData.dashboard.activeCards;
}

function renderTransactions() {
  const tbody = document.getElementById('transactionsTableBody');
  tbody.innerHTML = '';
  
  mockData.transactions.forEach(transaction => {
    const tr = document.createElement('tr');
    const statusClass = transaction.status === 'Tamamlandı' ? 'success' : transaction.status === 'Beklemede' ? 'warning' : 'danger';
    
    tr.innerHTML = `
      <td>${transaction.id}</td>
      <td>${transaction.date}</td>
      <td>${transaction.customer}</td>
      <td>${transaction.amount.toLocaleString('tr-TR')} ₺</td>
      <td><span class="status ${statusClass}">${transaction.status}</span></td>
      <td>${transaction.type}</td>
    `;
    
    tbody.appendChild(tr);
  });
}

function renderBalanceChart() {
  const ctx = document.getElementById('balanceChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: mockData.chartData.labels,
      datasets: [{
        label: 'Günlük Bakiye',
        data: mockData.chartData.values,
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toLocaleString('tr-TR') + ' ₺';
            }
          }
        }
      }
    }
  });
}

function setupPaymentLink() {
  const generateBtn = document.getElementById('generateLinkBtn');
  const amountInput = document.getElementById('paymentAmount');
  const descriptionInput = document.getElementById('paymentDescription');
  const linkOutput = document.getElementById('paymentLinkOutput');
  
  generateBtn.addEventListener('click', () => {
    const amount = amountInput.value.trim();
    const description = descriptionInput.value.trim();
    
    if (!amount || parseFloat(amount) <= 0) {
      linkOutput.innerHTML = '<div class="alert alert-danger">Geçerli bir tutar girin</div>';
      return;
    }
    
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const paymentLink = `https://pay.fintech.com/${uniqueId}`;
    
    linkOutput.innerHTML = `
      <div class="alert alert-success">
        <strong>Ödeme Linki Oluşturuldu:</strong><br>
        <a href="${paymentLink}" target="_blank">${paymentLink}</a><br>
        <small>Tutar: ${parseFloat(amount).toLocaleString('tr-TR')} ₺</small><br>
        ${description ? `<small>Açıklama: ${description}</small>` : ''}
      </div>
    `;
    
    amountInput.value = '';
    descriptionInput.value = '';
  });
}
```