import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Greeting Component
export const Greeting = ({ name = "John" }) => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }; 

  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>{getTimeOfDay()}</Text>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

// Account Card Component
export const AccountCard = ({ 
  accountType = "Savings", 
  currency = "NGN", 
  balance = "0.00" 
}) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['#D73535', '#A82828']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.accountType}>{accountType}</Text>
          <View style={styles.currencyBadge}>
            <Text style={styles.currencyText}>{currency}</Text>
          </View>
        </View>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>
            {currency === "NGN" ? "₦" : "$"}{balance}
          </Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.cardPattern} />
        </View>
      </LinearGradient>
    </View>
  );
};

// Fund Account Button Component
export const FundAccountButton = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.fundButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.fundButtonContent}>
        <View style={styles.iconCircle}>
          <Text style={styles.plusIcon}>+</Text>
        </View>
        <Text style={styles.fundButtonText}>Fund Account</Text>
      </View>
    </TouchableOpacity>
  );
};

// Transfer Shortcut Component
export const TransferShortcut = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.transferButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.transferButtonContent}>
        <View style={styles.transferIconCircle}>
          <Text style={styles.arrowIcon}>→</Text>
        </View>
        <Text style={styles.transferButtonText}>Transfer</Text>
      </View>
    </TouchableOpacity>
  );
};

// Complete Home Screen Example
export default function HomeScreen() {
  const accounts = [
    { accountType: "Savings", currency: "NGN", balance: "250,000.00" },
    { accountType: "Checking", currency: "USD", balance: "1,500.50" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Greeting name="John Doe" />
        
        <View style={styles.cardsSection}>
          <Text style={styles.sectionTitle}>Your Accounts</Text>
          {accounts.map((account, index) => (
            <AccountCard
              key={index}
              accountType={account.accountType}
              currency={account.currency}
              balance={account.balance}
            />
          ))}
        </View>

        <View style={styles.actionsSection}>
          <FundAccountButton onPress={() => console.log('Fund Account')} />
          <TransferShortcut onPress={() => console.log('Transfer')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 60,
  },
  
  // Greeting Styles
  greetingContainer: {
    marginBottom: 30,
  },
  greetingText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
  },

  // Cards Section
  cardsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },

  // Account Card Styles
  cardContainer: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#D73535',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardGradient: {
    padding: 24,
    minHeight: 180,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  accountType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
  },
  currencyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  currencyText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardPattern: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 40,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },

  // Actions Section
  actionsSection: {
    gap: 12,
  },

  // Fund Account Button Styles
  fundButton: {
    backgroundColor: '#D73535',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  fundButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  plusIcon: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  fundButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Transfer Shortcut Styles
  transferButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#D73535',
    overflow: 'hidden',
  },
  transferButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  transferIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  arrowIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D73535',
  },
  transferButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D73535',
  },
});