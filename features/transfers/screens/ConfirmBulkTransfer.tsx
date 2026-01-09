import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// SINGLE TRANSFER SUCCESS COMPONENTS 
// Success Animation Component (Shared)
export const SuccessAnimation = () => {
  return (
    <View style={styles.successAnimationContainer}>
      <View style={styles.successCircle}>
        <Text style={styles.successCheckmark}>✓</Text>
      </View>
      <View style={styles.successRing1} />
      <View style={styles.successRing2} />
    </View>
  );
};

// Single Transfer Success Message Component
export const SingleSuccessMessage = () => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.successTitle}>Transfer Successful!</Text>
      <Text style={styles.successSubtitle}>
        Your money has been sent successfully
      </Text>
    </View>
  );
};

// Single Transfer Details Card Component
export const SingleTransferDetailsCard = ({
  recipientName = 'John Doe',
  accountNumber = '0123456789',
  bankName = 'First Bank',
  amount = '5,000.00',
  currency = 'NGN',
  reference = 'TXN123456789',
  date = new Date().toLocaleDateString(),
  time = new Date().toLocaleTimeString(),
}) => {
  return (
    <View style={styles.detailsCard}>
      <View style={styles.amountSection}>
        <Text style={styles.amountLabel}>Amount Sent</Text>
        <Text style={styles.amountValue}>
          {currency === 'NGN' ? '₦' : '$'}{amount}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Recipient</Text>
          <Text style={styles.detailValue}>{recipientName}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Account Number</Text>
          <Text style={styles.detailValue}>{accountNumber}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Bank</Text>
          <Text style={styles.detailValue}>{bankName}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Reference</Text>
          <Text style={styles.detailValueRef}>{reference}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date & Time</Text>
          <Text style={styles.detailValue}>{date} at {time}</Text>
        </View>
      </View>
    </View>
  );
};

// Complete Single Transfer Success Screen
export function SingleTransferSuccessScreen() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/(tabs)');
  };

  const handleViewReceipt = () => {
    console.log('View receipt');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <SuccessAnimation />
          
          <SingleSuccessMessage />

          <SingleTransferDetailsCard
            recipientName="John Doe"
            accountNumber="0123456789"
            bankName="First Bank"
            amount="5,000.00"
            currency="NGN"
            reference="TXN123456789"
          />

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleGoHome}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>Back to Home</Text>
              <View style={styles.buttonIconCircle}>
                <Text style={styles.buttonIcon}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleViewReceipt}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>View Receipt</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerIcon}>🔒</Text>
            <Text style={styles.footerText}>
              Transaction completed securely
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// BULK TRANSFER SUCCESS COMPONENTS 

// Bulk Transfer Success Message Component
export const BulkSuccessMessage = ({ recipientCount = 0 }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.successTitle}>All Transfers Sent!</Text>
      <Text style={styles.successSubtitle}>
        Successfully sent money to {recipientCount} {recipientCount === 1 ? 'recipient' : 'recipients'}
      </Text>
    </View>
  );
};

// Bulk Transfer Summary Card Component
export const BulkTransferSummaryCard = ({
  recipientCount = 0,
  totalAmount = '0.00',
  currency = 'NGN',
  reference = 'BULK123456789',
  date = new Date().toLocaleDateString(),
  time = new Date().toLocaleTimeString(),
}) => {
  return (
    <View style={styles.detailsCard}>
      <View style={styles.bulkHeader}>
        <View style={styles.bulkIconContainer}>
          <Text style={styles.bulkIcon}>📊</Text>
        </View>
        <View style={styles.bulkHeaderInfo}>
          <Text style={styles.bulkHeaderLabel}>Bulk Transfer</Text>
          <Text style={styles.bulkHeaderValue}>{recipientCount} Recipients</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.amountSection}>
        <Text style={styles.amountLabel}>Total Amount Sent</Text>
        <Text style={styles.amountValue}>
          {currency === 'NGN' ? '₦' : '$'}{totalAmount}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Batch Reference</Text>
          <Text style={styles.detailValueRef}>{reference}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date & Time</Text>
          <Text style={styles.detailValue}>{date} at {time}</Text>
        </View>
      </View>
    </View>
  );
};

// Bulk Recipients List Component
export const BulkRecipientsList = ({ recipients = [] }) => {
  return (
    <View style={styles.recipientsListCard}>
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Transfer Breakdown</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>All Sent</Text>
        </View>
      </View>

      <View style={styles.recipientsList}>
        {recipients.map((recipient, index) => (
          <View key={index} style={styles.recipientItem}>
            <View style={styles.recipientCheckmark}>
              <Text style={styles.recipientCheckmarkIcon}>✓</Text>
            </View>
            <View style={styles.recipientInfo}>
              <Text style={styles.recipientName}>{recipient.name}</Text>
              <Text style={styles.recipientAccount}>
                {recipient.accountNumber} • {recipient.bankName}
              </Text>
            </View>
            <Text style={styles.recipientAmount}>
              ₦{recipient.amount}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Complete Bulk Transfer Success Screen
export default function BulkTransferSuccessScreen() {
  const router = useRouter();

  const mockRecipients = [
    { name: 'John Doe', accountNumber: '0123456789', bankName: 'First Bank', amount: '5,000.00' },
    { name: 'Jane Smith', accountNumber: '9876543210', bankName: 'GT Bank', amount: '3,500.00' },
    { name: 'Mike Johnson', accountNumber: '5555555555', bankName: 'Access Bank', amount: '7,200.00' },
  ];

  const totalAmount = mockRecipients.reduce(
    (sum, r) => sum + parseFloat(r.amount.replace(',', '')), 
    0
  ).toFixed(2);

  const handleGoHome = () => {
    router.push('/(tabs)');
  };

  const handleDownloadReport = () => {
    console.log('Download report');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <SuccessAnimation />
          
          <BulkSuccessMessage recipientCount={mockRecipients.length} />

          <BulkTransferSummaryCard
            recipientCount={mockRecipients.length}
            totalAmount={totalAmount}
            currency="NGN"
            reference="BULK123456789"
          />

          <BulkRecipientsList recipients={mockRecipients} />

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleGoHome}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>Back to Home</Text>
              <View style={styles.buttonIconCircle}>
                <Text style={styles.buttonIcon}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleDownloadReport}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>Download Report</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerIcon}>📧</Text>
            <Text style={styles.footerText}>
              Receipt has been sent to your email
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
    backgroundColor: '#F8F9FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 60,
    alignItems: 'center',
  },

  // Success Animation Styles (Shared)
  successAnimationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  successCheckmark: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  successRing1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#D1FAE5',
  },
  successRing2: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#ECFDF5',
  },

  // Success Message Styles (Shared)
  messageContainer: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  successTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Details Card Styles
  detailsCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  amountSection: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  amountLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: '600',
  },
  amountValue: {
    fontSize: 40,
    fontWeight: '700',
    color: '#10B981',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 20,
  },
  detailsSection: {
    gap: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
  detailValueRef: {
    fontSize: 13,
    fontWeight: '600',
    color: '#D73535',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },

  // Bulk Transfer Specific Styles
  bulkHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bulkIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bulkIcon: {
    fontSize: 32,
  },
  bulkHeaderInfo: {
    flex: 1,
  },
  bulkHeaderLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  bulkHeaderValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },

  // Recipients List Styles
  recipientsListCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  statusBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  recipientsList: {
    gap: 12,
  },
  recipientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
  },
  recipientCheckmark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recipientCheckmarkIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  recipientInfo: {
    flex: 1,
  },
  recipientName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
  },
  recipientAccount: {
    fontSize: 11,
    color: '#6B7280',
  },
  recipientAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#10B981',
  },

  // Actions Container Styles
  actionsContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
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
  },
  primaryButtonText: {
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
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: '#D73535',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#D73535',
  },

  // Footer Styles
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  footerIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});