import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function ConfirmTransferScreen({ route, navigation }) {
  const { selectedBank, recipientName, accountNumber, amount, remark } = route.params || {};

  const handleSendMoney = () => {
    // Handle money transfer logic here
    console.log('Sending money...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Confirm Transfer</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Recipient Details Card */}
        <View style={styles.detailCard}>
          <View style={styles.recipientHeader}>
            <Text style={styles.recipientName}>
              {recipientName || 'John Doe'}
            </Text>
          </View>
          
          <View style={styles.bankInfo}>
            <View style={styles.bankLogoContainer}>
              {/* Replace with actual bank logo */}
              <Text style={styles.bankLogoLarge}>🏦</Text>
            </View>
            
            <View style={styles.bankDetails}>
              <Text style={styles.bankNameText}>
                {selectedBank?.name || 'Bank Name'}
              </Text>
              <Text style={styles.accountNumber}>
                {accountNumber || '0123456789'}
              </Text>
            </View>
          </View>
        </View>

        {/* Amount Block */}
        <View style={styles.infoBlock}>
          <Text style={styles.blockLabel}>Amount</Text>
          <View style={styles.blockContent}>
            <Text style={styles.amountText}>
              ₦ {amount ? parseFloat(amount).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
            </Text>
          </View>
        </View>

        {/* Remark Block */}
        <View style={styles.infoBlock}>
          <Text style={styles.blockLabel}>Remark</Text>
          <View style={styles.blockContent}>
            <Text style={styles.remarkText}>
              {remark || 'No remark'}
            </Text>
          </View>
        </View>

        {/* Send Button */}
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSendMoney}
        >
          <Text style={styles.sendButtonText}>Send Money</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1dcf7c',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  recipientHeader: {
    marginBottom: 16,
  },
  recipientName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLogoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bankLogoLarge: {
    fontSize: 32,
  },
  bankDetails: {
    flex: 1,
  },
  bankNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: '#666666',
    letterSpacing: 0.5,
  },
  infoBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  blockLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  blockContent: {
    paddingTop: 4,
  },
  amountText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1dcf7c',
  },
  remarkText: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },
  sendButton: {
    backgroundColor: '#1dcf7c',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#1dcf7c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});