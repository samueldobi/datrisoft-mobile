import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// ============= TRANSFER MODE SCREEN COMPONENTS =============

// Transfer Mode Header Component
export const TransferModeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Transfer Mode</Text>
      <Text style={styles.headerSubtitle}>Choose how you want to send money</Text>
    </View>
  );
};

// Transfer Option Card Component
export const TransferOptionCard = ({ 
  icon, 
  title, 
  description, 
  badge,
  onPress 
}) => {
  return (
    <TouchableOpacity
      style={styles.optionCard}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.optionIconContainer}>
        <Text style={styles.optionIcon}>{icon}</Text>
      </View>
      
      <View style={styles.optionContent}>
        <View style={styles.optionHeader}>
          <Text style={styles.optionTitle}>{title}</Text>
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
      
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
};

// Complete Transfer Mode Screen
export function TransferScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TransferModeHeader />
        
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.optionsSection}>
            <TransferOptionCard
              icon="💸"
              title="Single Transfer"
              description="Send money to one recipient at a time"
              badge="QUICK"
              onPress={() => router.push('/transfers/single-transfer')}
            />

            <TransferOptionCard
              icon="📊"
              title="Bulk Transfer"
              description="Send money to multiple recipients at once"
              badge="SAVE TIME"
              onPress={() => router.push('/transfers/bulk-transfer')}
            />
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoIconContainer}>
              <Text style={styles.infoIcon}>💡</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Pro Tip</Text>
              <Text style={styles.infoText}>
                Use bulk transfer to send salaries, allowances, or payments to multiple people simultaneously
              </Text>
            </View>
          </View>
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

  // Transfer Mode Screen Styles
  optionsSection: {
    gap: 16,
    marginBottom: 24,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionIcon: {
    fontSize: 32,
  },
  optionContent: {
    flex: 1,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#D73535',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  optionDescription: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  arrowContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#D73535',
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
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
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#1E3A8A',
    lineHeight: 19,
  },
})