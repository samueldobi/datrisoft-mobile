import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransferAction from './components/TransferButton';
import AccountInput from './components/AccountNumberInput';
export default function TransferScreen(){
    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>
                    Transfer to Bank Account 
                </Text>
                <Text style={styles.sectionTitle}>
                    Enter Recipient Bank Account 
                </Text>
            
            <AccountInput/>
            {/* Quick Actions */}
            <View style={styles.actionsRow}>
                <TransferAction icon="university" label="To Bank" />
                <TransferAction icon="wallet" label="To Wallet" />
                <TransferAction icon="money-bill-wave" label="Withdraw" />
            </View>

            {/* Recent Transfers */}
            <Text style={styles.sectionTitle}>Recent Transfers</Text>

            <View style={styles.transferItem}>
                <Text style={styles.name}>Iyke → GTB</Text>
                <Text style={styles.amount}>₦25,000</Text>
            </View>

            <View style={styles.transferItem}>
                <Text style={styles.name}>Iyke → Opay</Text>
                <Text style={styles.amount}>₦10,000</Text>
            </View>

            <View style={styles.transferItem}>
                <Text style={styles.name}>Iyke → PalmPay</Text>
                <Text style={styles.amount}>₦7,500</Text>
            </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  actionBox: {
    width: '30%',
    backgroundColor: '#f2fdf8',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 18,
  },

  actionLabel: {
    marginTop: 8,
    color: '#333',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  transferItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  name: {
    color: '#333',
  },

  amount: {
    color: '#1dcf7c',
    fontWeight: '700',
  },
});
