```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('1M');
  const [balance] = useState(24750.85);
  const [changePercent] = useState(12.5);

  const transactions = [
    { id: 1, name: 'Apple Inc.', category: 'Investment', amount: -850.00, date: '2024-01-15', type: 'expense' },
    { id: 2, name: 'Salary Deposit', category: 'Income', amount: 5200.00, date: '2024-01-14', type: 'income' },
    { id: 3, name: 'Amazon Purchase', category: 'Shopping', amount: -124.99, date: '2024-01-13', type: 'expense' },
    { id: 4, name: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, date: '2024-01-12', type: 'expense' },
    { id: 5, name: 'Freelance Project', category: 'Income', amount: 1500.00, date: '2024-01-11', type: 'income' },
    { id: 6, name: 'Tesla Stock', category: 'Investment', amount: -2100.00, date: '2024-01-10', type: 'expense' },
  ];

  const stats = [
    { label: 'Income', value: '$6,700', change: '+8.2%', positive: true },
    { label: 'Expenses', value: '$3,090', change: '+2.4%', positive: false },
    { label: 'Savings', value: '$3,610', change: '+15.8%', positive: true },
  ];

  const periods = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Evening</Text>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>JD</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
          <View style={styles.changeContainer}>
            <Text style={[styles.changeText, changePercent >= 0 && styles.positiveChange]}>
              {changePercent >= 0 ? '+' : ''}{changePercent}% this month
            </Text>
          </View>
        </View>

        <View style={styles.periodSelector}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period}
              style={[styles.periodButton, selectedPeriod === period && styles.periodButtonActive]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text style={[styles.periodText, selectedPeriod === period && styles.periodTextActive]}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={[styles.statChange, stat.positive ? styles.positiveChange : styles.negativeChange]}>
                {stat.change}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsList}>
          {transactions.map((transaction) => (
            <TouchableOpacity key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <View style={[styles.transactionIcon, transaction.type === 'income' ? styles.incomeIcon : styles.expenseIcon]}>
                  <Text style={styles.transactionIconText}>
                    {transaction.type === 'income' ? '↓' : '↑'}
                  </Text>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionCategory}>{transaction.category}</Text>
                </View>
              </View>
              <View style={styles.transactionRight}>
                <Text style={[styles.transactionAmount, transaction.type === 'income' ? styles.incomeAmount : styles.expenseAmount]}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Text style={styles.actionIcon}>→</Text>
            </View>
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Text style={styles.actionIcon}>←</Text>
            </View>
            <Text style={styles.actionLabel}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Text style={styles.actionIcon}>+</Text>
            </View>
            <Text style={styles.actionLabel}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Text style={styles.actionIcon}>⋯</Text>
            </View>
            <Text style={styles.actionLabel}>More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  profileButton: {
    padding: 4,
  },
  profileIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  profileText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  balanceCard: {
    backgroundColor: '#0A0A0A',
    marginHorizontal: 24,
    marginTop: 10,
    marginBottom: 24,
    padding: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1A1A1A',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  balanceAmount: {
    fontSize: 42,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: -1,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  positiveChange: {
    color: '#00FF88',
  },
  negativeChange: {
    color: '#FF3B30',
  },
  periodSelector: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 8,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#0A0A0A',
    borderWidth: 1,
    borderColor: '#1A1A1A',
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  periodText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
  },
  periodTextActive: {
    color: '#000000',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1A1A1A',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  statChange: {
    fontSize: 11,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  seeAll: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
  },
  transactionsList: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1A1A1A',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  incomeIcon: {
    backgroundColor: 'rgba(0, 255, 136, 0.1)',
  },
  expenseIcon: {
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
  },
  transactionIconText: {
    fontSize: 20,
    fontWeight: '600',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  transactionCategory: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '500',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  incomeAmount: {
    color: '#00FF88',
  },
  expenseAmount: {
    color: '#FFFFFF',
  },
  transactionDate: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 40,
    gap: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#0A0A0A',
    borderWidth: 1,
    borderColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionIcon: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  actionLabel: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '600',
  },
  footer: {
    height: 20,
  },
});
```