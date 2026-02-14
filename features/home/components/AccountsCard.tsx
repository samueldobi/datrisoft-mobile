import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AccountCard= ({ 
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
const createAccountBtn =()=>{
    return(
        <View></View>
    )
}
export const AccountsCard = () => {

  const accounts = [
    { id: 1, accountType: 'Savings', currency: 'NGN', balance: '120,450.00' },
    { id: 2, accountType: 'Checking', currency: 'NGN', balance: '45,000.00' },
    { id: 3, accountType: 'Dollar', currency: 'USD', balance: '320.55' },
  ];

  return (
    <>
     <Text style={styles.sectionTitle}>Your Accounts</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }} 
    >
       
      {accounts.map((account) => (
        <View key={account.id} style={{ width: 300, marginRight: 16 }}>
          <AccountCard {...account} />
        </View>
      ))}
    </ScrollView>
    </>
  );
};


// Stylesheet
const styles = StyleSheet.create({
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
   sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    marginVertical: 5,
    padding:10,
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
});