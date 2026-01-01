import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
export default function SelectBankUi({onNext}){
    const banks = [
    { id: 1, name: 'First Bank', logo: '🏦' },
    { id: 2, name: 'GT Bank', logo: '🏛️' },
    { id: 3, name: 'Access Bank', logo: '🏢' },
    { id: 4, name: 'Zenith Bank', logo: '🏪' },
    { id: 5, name: 'UBA', logo: '🏦' },
  ];
    return(
            <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Bank</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {banks.map((bank) => (
          <TouchableOpacity
            key={bank.id}
            style={styles.bankItem}
            onPress={() => onNext(bank)}
          >
            <Text style={styles.bankLogo}>{bank.logo}</Text>
            <Text style={styles.bankName}>{bank.name}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

    )
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
    marginTop: 8,
  },
  inputPlaceholder: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fafafa',
    marginBottom: 24,
  },
  placeholderText: {
    color: '#999999',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1dcf7c',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#1dcf7c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  bankLogo: {
    fontSize: 32,
    marginRight: 16,
  },
  bankName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  arrow: {
    fontSize: 28,
    color: '#1dcf7c',
    fontWeight: '300',
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
  bankLogoLarge: {
    fontSize: 40,
    marginRight: 16,
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
  },
  blockContent: {
    paddingTop: 4,
  },
  amountText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1dcf7c',
  },
  remarkText: {
    fontSize: 16,
    color: '#333333',
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
  },
  navDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },
  activeDot: {
    backgroundColor: '#1dcf7c',
    width: 24,
  },
});