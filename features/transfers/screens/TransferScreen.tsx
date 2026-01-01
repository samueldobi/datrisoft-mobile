import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountInput from '../components/AccountNumberInput';
import { useRouter } from "expo-router";

export default function TransferScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account Transfer</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.label}>Enter Recipient Account Number</Text>
        
        {/* Placeholder for React Native Paper TextInput */}
        <View style={styles.inputPlaceholder}>
          {/* Replace this with your Paper TextInput component */}
          <AccountInput/>
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>router.push('/transfers/selectBank')}
        >
          <Text style={styles.buttonText}>Select Bank</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});