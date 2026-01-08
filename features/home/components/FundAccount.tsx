import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
const FundAccountButton = ({ onPress }) => {
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
        <Text style={styles.fundButtonText}>Create Account</Text>
      </View>
    </TouchableOpacity>
  );
};

// Transfer Shortcut Component
const TransferShortcut = ({ onPress }) => {
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
export const  FundAccounts =()=>{
    const router = useRouter();
    return(
        <View style = {styles.container}>
        <FundAccountButton onPress={()=>{router.push('/accounts/create-account')}}/>
        <TransferShortcut onPress={()=>router.push('/transfers')}/>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
        gap:12,
        padding:10,
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
})