```javascript
export const mockData = {
  totalBalance: 125750.50,
  successfulTransactions: 1247,
  failedTransactions: 23,
  pendingTransactions: 8,
  recentTransactions: [
    {
      id: "TRX001847239",
      date: "2025-01-15T14:32:18Z",
      amount: 2500.00,
      currency: "TRY",
      type: "incoming",
      status: "completed",
      sender: "Ahmet Yılmaz",
      receiver: "Mehmet Demir",
      description: "Ürün ödemesi",
      fee: 12.50,
      category: "e-commerce"
    },
    {
      id: "TRX001847238",
      date: "2025-01-15T13:21:45Z",
      amount: 850.75,
      currency: "TRY",
      type: "outgoing",
      status: "completed",
      sender: "Mehmet Demir",
      receiver: "Ayşe Kaya",
      description: "Fatura ödemesi",
      fee: 4.25,
      category: "bills"
    },
    {
      id: "TRX001847237",
      date: "2025-01-15T12:15:30Z",
      amount: 15000.00,
      currency: "TRY",
      type: "incoming",
      status: "failed",
      sender: "Fatma Şahin",
      receiver: "Mehmet Demir",
      description: "Yatırım transferi",
      fee: 0.00,
      category: "investment",
      failureReason: "Yetersiz bakiye"
    },
    {
      id: "TRX001847236",
      date: "2025-01-15T11:45:12Z",
      amount: 3200.00,
      currency: "TRY",
      type: "outgoing",
      status: "pending",
      sender: "Mehmet Demir",
      receiver: "Ali Öz",
      description: "Kiralama bedeli",
      fee: 16.00,
      category: "rent"
    },
    {
      id: "TRX001847235",
      date: "2025-01-15T10:22:55Z",
      amount: 750.00,
      currency: "TRY",
      type: "incoming",
      status: "completed",
      sender: "Zeynep Arslan",
      receiver: "Mehmet Demir",
      description: "Hizmet ücreti",
      fee: 3.75,
      category: "service"
    },
    {
      id: "TRX001847234",
      date: "2025-01-15T09:18:40Z",
      amount: 5500.00,
      currency: "TRY",
      type: "outgoing",
      status: "completed",
      sender: "Mehmet Demir",
      receiver: "Murat Yıldız",
      description: "Tedarikçi ödemesi",
      fee: 27.50,
      category: "supplier"
    },
    {
      id: "TRX001847233",
      date: "2025-01-15T08:55:20Z",
      amount: 1200.00,
      currency: "TRY",
      type: "incoming",
      status: "completed",
      sender: "Can Aydın",
      receiver: "Mehmet Demir",
      description: "Danışmanlık ücreti",
      fee: 6.00,
      category: "consulting"
    },
    {
      id: "TRX001847232",
      date: "2025-01-14T16:40:15Z",
      amount: 450.50,
      currency: "TRY",
      type: "outgoing",
      status: "failed",
      sender: "Mehmet Demir",
      receiver: "Elif Koç",
      description: "Abonelik bedeli",
      fee: 0.00,
      category: "subscription",
      failureReason: "Hesap bloke"
    },
    {
      id: "TRX001847231",
      date: "2025-01-14T15:30:45Z",
      amount: 8900.00,
      currency: "TRY",
      type: "incoming",
      status: "completed",
      sender: "Hasan Çelik",
      receiver: "Mehmet Demir",
      description: "Proje ödemesi",
      fee: 44.50,
      category: "project"
    },
    {
      id: "TRX001847230",
      date: "2025-01-14T14:12:30Z",
      amount: 2100.00,
      currency: "TRY",
      type: "outgoing",
      status: "completed",
      sender: "Mehmet Demir",
      receiver: "Selin Yurt",
      description: "Maaş ödemesi",
      fee: 10.50,
      category: "salary"
    }
  ],
  transactionStats: {
    daily: {
      total: 35200.00,
      count: 24,
      average: 1466.67
    },
    weekly: {
      total: 198450.00,
      count: 156,
      average: 1272.12
    },
    monthly: {
      total: 847320.00,
      count: 642,
      average: 1319.78
    }
  },
  accountInfo: {
    accountNumber: "TR330006100519786457841326",
    accountHolder: "Mehmet Demir",
    accountType: "Business",
    currency: "TRY",
    status: "active",
    createdDate: "2022-03-15T08:00:00Z",
    lastActivity: "2025-01-15T14:32:18Z"
  },
  fraudAlerts: [
    {
      id: "FRD00123",
      date: "2025-01-15T11:20:00Z",
      severity: "medium",
      message: "Olağandışı işlem tutarı tespit edildi",
      transactionId: "TRX001847237",
      resolved: false
    },
    {
      id: "FRD00122",
      date: "2025-01-14T09:15:00Z",
      severity: "low",
      message: "Yeni cihazdan giriş denemesi",
      resolved: true
    }
  ]
};
```