import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Header Component
export const CreateAccountHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Create Account</Text>
      <Text style={styles.headerSubtitle}>Add a new account to your profile</Text>
    </View>
  );
};

// Account Type Selector Component
export const AccountTypeSelector = ({ selectedType, onSelect }) => {
  const accountTypes = [
    { id: 'savings', label: 'Savings', icon: '💰', description: 'For your savings and goals' },
    { id: 'checking', label: 'Checking', icon: '💳', description: 'For everyday transactions' },
  ];

  return (
    <View style={styles.selectorSection}>
      <Text style={styles.sectionLabel}>Account Type</Text>
      <View style={styles.optionsContainer}>
        {accountTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.optionCard,
              selectedType === type.id && styles.optionCardSelected,
            ]}
            onPress={() => onSelect(type.id)}
            activeOpacity={0.7}
          >
            <View style={styles.optionHeader}>
              <View style={[
                styles.iconContainer,
                selectedType === type.id && styles.iconContainerSelected,
              ]}>
                <Text style={styles.optionIcon}>{type.icon}</Text>
              </View>
              {selectedType === type.id && (
                <View style={styles.checkmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </View>
            <Text style={[
              styles.optionLabel,
              selectedType === type.id && styles.optionLabelSelected,
            ]}>
              {type.label}
            </Text>
            <Text style={styles.optionDescription}>{type.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Currency Selector Component
export const CurrencySelector = ({ selectedCurrency, onSelect }) => {
  const currencies = [
    { id: 'NGN', label: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
    { id: 'USD', label: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  ];

  return (
    <View style={styles.selectorSection}>
      <Text style={styles.sectionLabel}>Currency</Text>
      <View style={styles.currencyContainer}>
        {currencies.map((currency) => (
          <TouchableOpacity
            key={currency.id}
            style={[
              styles.currencyCard,
              selectedCurrency === currency.id && styles.currencyCardSelected,
            ]}
            onPress={() => onSelect(currency.id)}
            activeOpacity={0.7}
          >
            <View style={styles.currencyContent}>
              <Text style={styles.currencyFlag}>{currency.flag}</Text>
              <View style={styles.currencyInfo}>
                <Text style={[
                  styles.currencyCode,
                  selectedCurrency === currency.id && styles.currencyCodeSelected,
                ]}>
                  {currency.id}
                </Text>
                <Text style={styles.currencyLabel}>{currency.label}</Text>
              </View>
              {selectedCurrency === currency.id && (
                <View style={styles.currencyCheckmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Info Card Component
export const InfoCard = () => {
  return (
    <View style={styles.infoCard}>
      <View style={styles.infoIconContainer}>
        <Text style={styles.infoIcon}>ℹ</Text>
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.infoTitle}>Account Benefits</Text>
        <Text style={styles.infoText}>
          • Free account maintenance{'\n'}
          • Instant transfers between accounts{'\n'}
          • Secure and encrypted transactions
        </Text>
      </View>
    </View>
  );
};

// Create Button Component
export const CreateAccountButton = ({ onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.createButton,
        disabled && styles.createButtonDisabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.createButtonText}>Create Account</Text>
      <View style={styles.buttonIconCircle}>
        <Text style={styles.buttonIcon}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

// Complete Create Account Screen
export default function CreateAccountScreen() {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCreateAccount = () => {
    console.log('Creating account:', {
      accountType: selectedAccountType,
      currency: selectedCurrency,
    });
    // API call logic here
  };

  const isFormValid = selectedAccountType && selectedCurrency;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CreateAccountHeader />
        
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <AccountTypeSelector
            selectedType={selectedAccountType}
            onSelect={setSelectedAccountType}
          />

          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onSelect={setSelectedCurrency}
          />

          <InfoCard />

          <CreateAccountButton
            onPress={handleCreateAccount}
            disabled={!isFormValid}
          />
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
  selectorSection: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  
  // Account Type Selector Styles
  optionsContainer: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  optionCardSelected: {
    borderColor: '#D73535',
    backgroundColor: '#FEF2F2',
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerSelected: {
    backgroundColor: '#FEE2E2',
  },
  optionIcon: {
    fontSize: 28,
  },
  checkmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D73535',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  optionLabelSelected: {
    color: '#D73535',
  },
  optionDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },

  // Currency Selector Styles
  currencyContainer: {
    gap: 12,
  },
  currencyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  currencyCardSelected: {
    borderColor: '#D73535',
    backgroundColor: '#FEF2F2',
  },
  currencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyFlag: {
    fontSize: 32,
    marginRight: 16,
  },
  currencyInfo: {
    flex: 1,
  },
  currencyCode: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
  },
  currencyCodeSelected: {
    color: '#D73535',
  },
  currencyLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  currencyCheckmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D73535',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Info Card Styles
  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 24,
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
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#1E3A8A',
    lineHeight: 20,
  },

  // Create Button Styles
  createButton: {
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
  createButtonDisabled: {
    backgroundColor: '#D1D5DB',
    shadowOpacity: 0,
    elevation: 0,
  },
  createButtonText: {
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
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});