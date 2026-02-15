import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SecuritySection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Security</Text>
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Change Password</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Change Transaction PIN</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Reset Secret Question</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: {
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '400',
  },
  arrow: {
    fontSize: 24,
    color: '#CCCCCC',
    fontWeight: '300',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default SecuritySection;
