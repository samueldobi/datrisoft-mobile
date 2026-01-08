import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function ConfirmTransferScreen() {
  const params = useLocalSearchParams();
  const [amount, onChangeAmount] = React.useState('');
  const [remark, onChangeRemark] = React.useState('');

  const handleSendMoney = () => {
    console.log('Sending money...');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Confirm Transfer</Text>
          <Text style={styles.headerSubtitle}>Review details before sending</Text>
        </View>
        
        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Recipient Details Card */}
          <View style={styles.detailCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderLabel}>Recipient</Text>
            </View>
            
            <View style={styles.recipientInfo}>
              <Text style={styles.recipientName}>John Doe</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.bankInfo}>
              <View style={styles.bankLogoContainer}>
                <Text style={styles.bankLogoLarge}>🏦</Text>
              </View>
              
              <View style={styles.bankDetails}>
                <Text style={styles.bankNameText}>First Bank</Text>
                <Text style={styles.accountNumber}>0123456789</Text>
              </View>
            </View>
          </View>

          {/* Amount Block */}
          <View style={styles.infoBlock}>
            <Text style={styles.blockLabel}>Amount</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.currencySymbol}>₦</Text>
              <TextInput
                style={styles.amountInput}
                onChangeText={onChangeAmount}
                value={amount}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Remark Block */}
          <View style={styles.infoBlock}>
            <Text style={styles.blockLabel}>Remark (Optional)</Text>
            <TextInput
              style={styles.remarkInput}
              onChangeText={onChangeRemark}
              value={remark}
              placeholder="Add a note for this transfer"
              placeholderTextColor="#9CA3AF"
              keyboardType="default"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>

          {/* Summary Card */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Transfer Fee</Text>
              <Text style={styles.summaryValue}>₦10.00</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelTotal}>Total Amount</Text>
              <Text style={styles.summaryValueTotal}>
                ₦{amount ? (parseFloat(amount) + 10).toFixed(2) : '10.00'}
              </Text>
            </View>
          </View>

          {/* Send Button */}
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={handleSendMoney}
            activeOpacity={0.8}
          >
            <Text style={styles.sendButtonText}>Confirm & Send</Text>
            <View style={styles.sendIconCircle}>
              <Text style={styles.sendIcon}>→</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.securityNote}>
            <Text style={styles.securityIcon}>🔒</Text>
            <Text style={styles.securityText}>
              This transaction is encrypted and secure
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 16 : 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '400',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    marginBottom: 12,
  },
  cardHeaderLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  recipientInfo: {
    marginBottom: 16,
  },
  recipientName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 16,
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLogoContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bankLogoLarge: {
    fontSize: 28,
  },
  bankDetails: {
    flex: 1,
  },
  bankNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: '#6B7280',
    letterSpacing: 0.5,
  },
  infoBlock: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  blockLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  currencySymbol: {
    fontSize: 28,
    fontWeight: '700',
    color: '#D73535',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    padding: 0,
  },
  remarkInput: {
    fontSize: 15,
    color: '#1F2937',
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  summaryCard: {
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  summaryValue: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
  },
  summaryLabelTotal: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '700',
  },
  summaryValueTotal: {
    fontSize: 20,
    color: '#D73535',
    fontWeight: '700',
  },
  sendButton: {
    backgroundColor: '#D73535',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D73535',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 12,
  },
  sendIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 8,
  },
  securityIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  securityText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});