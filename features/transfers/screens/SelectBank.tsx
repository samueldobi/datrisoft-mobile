import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

export default function SelectBankUi() {
  const router = useRouter();
  
  const banks = [
    { id: 1, name: 'First Bank', logo: '🏦' },
    { id: 2, name: 'GT Bank', logo: '🏛️' },
    { id: 3, name: 'Access Bank', logo: '🏢' },
    { id: 4, name: 'Zenith Bank', logo: '🏪' },
    { id: 5, name: 'UBA', logo: '🏦' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Bank</Text>
          <Text style={styles.headerSubtitle}>Choose recipient's bank</Text>
        </View>
        
        <View style={styles.searchSection}>
          <Text style={styles.sectionLabel}>Popular Banks</Text>
        </View>

        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {banks.map((bank, index) => (
            <TouchableOpacity
              key={bank.id}
              style={[
                styles.bankItem,
                index === banks.length - 1 && styles.lastBankItem
              ]}
              onPress={() => router.push('/transfers/confirmTransfer')}
              activeOpacity={0.7}
            >
              <View style={styles.bankLogoContainer}>
                <Text style={styles.bankLogo}>{bank.logo}</Text>
              </View>
              <Text style={styles.bankName}>{bank.name}</Text>
              <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 8,
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  lastBankItem: {
    marginBottom: 24,
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
  bankLogo: {
    fontSize: 28,
  },
  bankName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#D73535',
    fontWeight: '700',
  },
});