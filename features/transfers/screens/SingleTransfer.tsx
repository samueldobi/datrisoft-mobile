import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountInput from '../components/AccountNumberInput';
import { useRouter } from "expo-router";

export default function TransferScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account Transfer</Text>
          <Text style={styles.headerSubtitle}>Send money securely</Text>
        </View>
        
        <View style={styles.content}>
          <View style={styles.instructionCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>₦</Text>
            </View>
            <Text style={styles.instructionText}>
              Enter the recipient's account number to get started
            </Text>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.label}>Recipient Account Number</Text>
            <View style={styles.inputWrapper}>
              <AccountInput />
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/transfers/selectBank')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Continue to Bank Selection</Text>
            <Text style={styles.arrowIcon}>→</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              All transfers are secured with bank-level encryption
            </Text>
          </View>
        </View>
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
    padding: 20,
  },
  instructionCard: {
    backgroundColor: '#FEF2F2',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D73535',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: '#991B1B',
    lineHeight: 20,
    fontWeight: '500',
  },
  inputSection: {
    marginBottom: 32,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 18,
  },
});