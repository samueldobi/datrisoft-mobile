import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';







// Bulk Transfer Header Component
export const BulkTransferHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Bulk Transfer</Text>
      <Text style={styles.headerSubtitle}>Add multiple recipients</Text>
    </View>
  );
};

// Recipient Card Component
export const RecipientCard = ({ 
  accountNumber, 
  bankName, 
  amount, 
  index,
  onRemove 
}) => {
  return (
    <View style={styles.recipientCard}>
      <View style={styles.recipientIconContainer}>
        <Text style={styles.recipientNumber}>{index + 1}</Text>
      </View>
      
      <View style={styles.recipientDetails}>
        <View style={styles.recipientRow}>
          <Text style={styles.recipientLabel}>Account</Text>
          <Text style={styles.recipientValue}>{accountNumber}</Text>
        </View>
        <View style={styles.recipientRow}>
          <Text style={styles.recipientLabel}>Bank</Text>
          <Text style={styles.recipientValue}>{bankName}</Text>
        </View>
        <View style={styles.recipientRow}>
          <Text style={styles.recipientLabel}>Amount</Text>
          <Text style={styles.recipientAmount}>₦{amount}</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemove}
        activeOpacity={0.7}
      >
        <Text style={styles.removeIcon}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add Recipient Form Component
export const AddRecipientForm = ({ onAdd }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (accountNumber && bankName && amount) {
      onAdd({ accountNumber, bankName, amount });
      setAccountNumber('');
      setBankName('');
      setAmount('');
    }
  };

  return (
    <View style={styles.addForm}>
      <Text style={styles.formTitle}>Add Recipient</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Account Number</Text>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder="Enter account number"
          placeholderTextColor="#9CA3AF"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Bank Name</Text>
        <TextInput
          style={styles.input}
          value={bankName}
          onChangeText={setBankName}
          placeholder="Select or enter bank name"
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Amount</Text>
        <View style={styles.amountInputContainer}>
          <Text style={styles.currencySymbol}>₦</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonIcon}>+</Text>
        <Text style={styles.addButtonText}>Add Recipient</Text>
      </TouchableOpacity>
    </View>
  );
};

// Summary Card Component
export const BulkSummaryCard = ({ recipients }) => {
  const totalAmount = recipients.reduce((sum, r) => sum + parseFloat(r.amount || 0), 0);
  const recipientCount = recipients.length;

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>Transfer Summary</Text>
      
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Recipients</Text>
        <Text style={styles.summaryValue}>{recipientCount}</Text>
      </View>
      
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Total Amount</Text>
        <Text style={styles.summaryAmount}>₦{totalAmount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Transfer Fee</Text>
        <Text style={styles.summaryValue}>₦{(recipientCount * 10).toFixed(2)}</Text>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabelTotal}>Grand Total</Text>
        <Text style={styles.summaryValueTotal}>
          ₦{(totalAmount + (recipientCount * 10)).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

// Complete Bulk Transfer Screen
export default function BulkTransferScreen() {
  const router = useRouter();
  const [recipients, setRecipients] = useState([]);

  const handleAddRecipient = (recipient) => {
    setRecipients([...recipients, recipient]);
  };

  const handleRemoveRecipient = (index) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const handleProceed = () => {
    console.log('Processing bulk transfer:', recipients);
    // API call logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <BulkTransferHeader />
        
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <AddRecipientForm onAdd={handleAddRecipient} />

          {recipients.length > 0 && (
            <>
              <View style={styles.recipientsSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Recipients List</Text>
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{recipients.length}</Text>
                  </View>
                </View>

                {recipients.map((recipient, index) => (
                  <RecipientCard
                    key={index}
                    index={index}
                    accountNumber={recipient.accountNumber}
                    bankName={recipient.bankName}
                    amount={recipient.amount}
                    onRemove={() => handleRemoveRecipient(index)}
                  />
                ))}
              </View>

              <BulkSummaryCard recipients={recipients} />

              <TouchableOpacity
                style={styles.proceedButton}
                onPress={handleProceed}
                activeOpacity={0.8}
              >
                <Text style={styles.proceedButtonText}>Proceed to Confirm</Text>
                <View style={styles.buttonIconCircle}>
                  <Text style={styles.buttonIcon}>→</Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {recipients.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>📋</Text>
              <Text style={styles.emptyTitle}>No recipients yet</Text>
              <Text style={styles.emptyText}>
                Add recipients using the form above to start your bulk transfer
              </Text>
            </View>
          )}
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

  // Transfer Mode Screen Styles
  optionsSection: {
    gap: 16,
    marginBottom: 24,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionIcon: {
    fontSize: 32,
  },
  optionContent: {
    flex: 1,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#D73535',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  optionDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  arrowContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#D73535',
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#BFDBFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoIcon: {
    fontSize: 20,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#1E3A8A',
    lineHeight: 19,
  },

  // Bulk Transfer Form Styles
  addForm: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#1F2937',
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingLeft: 14,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D73535',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    padding: 14,
    fontSize: 15,
    color: '#1F2937',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D73535',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  addButtonIcon: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D73535',
    marginRight: 8,
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#D73535',
  },

  // Recipients List Styles
  recipientsSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  countBadge: {
    backgroundColor: '#D73535',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  recipientCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  recipientIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recipientNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#D73535',
  },
  recipientDetails: {
    flex: 1,
  },
  recipientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  recipientLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  recipientValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  recipientAmount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D73535',
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  removeIcon: {
    fontSize: 24,
    color: '#D73535',
    fontWeight: '700',
    lineHeight: 24,
  },

  // Summary Card Styles
  summaryCard: {
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#FEE2E2',
    marginVertical: 12,
  },
  summaryLabelTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  summaryValueTotal: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D73535',
  },

  // Proceed Button Styles
  proceedButton: {
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
    marginBottom: 24,
  },
  proceedButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 12,
  },
  buttonIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // Empty State Styles
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 40,
  },
});