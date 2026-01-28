```javascript
import mockData from './mockData.js';

const stats = {
  balance: document.getElementById('totalBalance'),
  success: document.getElementById('successCount'),
  pending: document.getElementById('pendingCount'),
  failed: document.getElementById('failedCount')
};

const transactionsTableBody = document.getElementById('transactionsTableBody');
const paymentForm = document.getElementById('paymentForm');
const paymentModal = document.getElementById('paymentModal');
const openPaymentBtn = document.getElementById('openPaymentBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function updateStats() {
  stats.balance.textContent = mockData.totalBalance.toFixed(2);
  stats.success.textContent = mockData.successCount;
  stats.pending.textContent = mockData.pendingCount;
  stats.failed.textContent = mockData.failedCount;
}

function renderTransactions() {
  transactionsTableBody.innerHTML = '';
  mockData.transactions.forEach(tx => {
    const row = document.createElement('tr');
    const statusClass = tx.status === 'success' ? 'status-success' : tx.status === 'pending' ? 'status-pending' : 'status-failed';
    row.innerHTML = `
      <td>${tx.id}</td>
      <td>${tx.customerName}</td>
      <td>${tx.amount.toFixed(2)} TL</td>
      <td><span class="status-badge ${statusClass}">${tx.status}</span></td>
      <td>${tx.date}</td>
    `;
    transactionsTableBody.appendChild(row);
  });
}

openPaymentBtn.addEventListener('click', () => {
  paymentModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  paymentModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === paymentModal) {
    paymentModal.style.display = 'none';
  }
});

paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(paymentForm);
  const customerName = formData.get('customerName');
  const amount = parseFloat(formData.get('amount'));
  const cardNumber = formData.get('cardNumber');
  const cvv = formData.get('cvv');
  const expiry = formData.get('expiry');

  if (!customerName || !amount || !cardNumber || !cvv || !expiry) {
    alert('Tüm alanları doldurun');
    return;
  }

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert('Geçersiz kart numarası');
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert('Geçersiz CVV');
    return;
  }

  const newTransaction = {
    id: 'TX' + (mockData.transactions.length + 1).toString().padStart(4, '0'),
    customerName: customerName,
    amount: amount,
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  };

  mockData.transactions.unshift(newTransaction);
  mockData.pendingCount++;

  setTimeout(() => {
    const txIndex = mockData.transactions.findIndex(t => t.id === newTransaction.id);
    if (txIndex !== -1) {
      const isSuccess = Math.random() > 0.1;
      mockData.transactions[txIndex].status = isSuccess ? 'success' : 'failed';
      if (isSuccess) {
        mockData.successCount++;
        mockData.totalBalance += amount;
      } else {
        mockData.failedCount++;
      }
      mockData.pendingCount--;
      updateStats();
      renderTransactions();
    }
  }, 3000);

  updateStats();
  renderTransactions();
  paymentForm.reset();
  paymentModal.style.display = 'none';
  alert('Ödeme işlemi başlatıldı');
});

updateStats();
renderTransactions();
```