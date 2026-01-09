import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// Success Icon Component
export const SuccessIcon = () => {
  return (
    <View style={styles.successIconContainer}>
      <View style={styles.successCircle}>
        <Text style={styles.successCheckmark}>✓</Text>
      </View>
      <View style={styles.successRing} />
    </View>
  );
};

// Success Message Component
export const SuccessMessage = () => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.successTitle}>Account Created!</Text>
      <Text style={styles.successSubtitle}>
        Your new account has been successfully created and is ready to use
      </Text>
    </View>
  );
};

// Account Details Card Component
export const AccountDetailsCard = ({ 
  accountType = 'Savings',
  currency = 'NGN',
  accountNumber = '0123456789',
  balance = '0.00'
}) => {
  return (
    <View style={styles.detailsCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderLabel}>Account Details</Text>
      </View>

      <View style={styles.accountTypeRow}>
        <View style={styles.iconBadge}>
          <Text style={styles.badgeIcon}>
            {accountType === 'Savings' ? '💰' : '💳'}
          </Text>
        </View>
        <View style={styles.accountTypeInfo}>
          <Text style={styles.accountTypeLabel}>Account Type</Text>
          <Text style={styles.accountTypeValue}>{accountType}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailRow}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Currency</Text>
          <View style={styles.currencyBadge}>
            <Text style={styles.currencyFlag}>
              {currency === 'NGN' ? '🇳🇬' : '🇺🇸'}
            </Text>
            <Text style={styles.currencyCode}>{currency}</Text>
          </View>
        </View>

        <View style={[styles.detailItem, styles.detailItemRight]}>
          <Text style={styles.detailLabel}>Account Number</Text>
          <Text style={styles.detailValue}>{accountNumber}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>
          {currency === 'NGN' ? '₦' : '$'}{balance}
        </Text>
      </View>
    </View>
  );
};

// Next Steps Card Component
export const NextStepsCard = () => {
  const steps = [
    { icon: '💵', text: 'Fund your account to start transacting' },
    { icon: '🔄', text: 'Transfer money between your accounts' },
    { icon: '📊', text: 'Track your transactions in real-time' },
  ];

  return (
    <View style={styles.nextStepsCard}>
      <Text style={styles.nextStepsTitle}>What's Next?</Text>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepRow}>
          <View style={styles.stepIconContainer}>
            <Text style={styles.stepIcon}>{step.icon}</Text>
          </View>
          <Text style={styles.stepText}>{step.text}</Text>
        </View>
      ))}
    </View>
  );
};

// Action Buttons Component
export const ActionButtons = ({ onGoHome, onCreateAnother }) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={onGoHome}
        activeOpacity={0.8}
      >
        <Text style={styles.primaryButtonText}>Go to Home</Text>
        <View style={styles.buttonIconCircle}>
          <Text style={styles.buttonIcon}>→</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={onCreateAnother}
        activeOpacity={0.8}
      >
        <Text style={styles.secondaryButtonText}>Create Another Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Complete Confirm Account Screen
export default function ConfirmAccountScreen() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/(tabs)');
  };

  const handleCreateAnother = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <SuccessIcon />
          
          <SuccessMessage />

          <AccountDetailsCard
            accountType="Savings"
            currency="NGN"
            accountNumber="1234567890"
            balance="0.00"
          />

          <NextStepsCard />

          <ActionButtons
            onGoHome={handleGoHome}
            onCreateAnother={handleCreateAnother}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              You can manage all your accounts from the home screen
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

  // Success Icon Styles
  successIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D73535',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D73535',
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
  successRing: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FEE2E2',
  },

  // Success Message Styles
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

  // Account Details Card Styles
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
  cardHeader: {
    marginBottom: 20,
  },
  cardHeaderLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  accountTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  badgeIcon: {
    fontSize: 32,
  },
  accountTypeInfo: {
    flex: 1,
  },
  accountTypeLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  accountTypeValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flex: 1,
  },
  detailItemRight: {
    alignItems: 'flex-end',
  },
  detailLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  currencyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  currencyFlag: {
    fontSize: 16,
    marginRight: 6,
  },
  currencyCode: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D73535',
  },
  balanceSection: {
    alignItems: 'center',
    paddingTop: 8,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#D73535',
  },

  // Next Steps Card Styles
  nextStepsCard: {
    width: '100%',
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  nextStepsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 16,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#BFDBFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepIcon: {
    fontSize: 18,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#1E3A8A',
    lineHeight: 20,
  },

  // Buttons Styles
  buttonsContainer: {
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
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 18,
  },
});