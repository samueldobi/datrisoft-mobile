import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const SettingsSection = () => {
  const [hideBalance, setHideBalance] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [showKobo, setShowKobo] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <View style={styles.item}>
        <Text style={styles.label}>Hide Balance</Text>
        <Switch
          value={hideBalance}
          onValueChange={setHideBalance}
          trackColor={{ false: '#D1D1D6', true: '#34C759' }}
          thumbColor="#FFFFFF"
        />
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.item}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#D1D1D6', true: '#34C759' }}
          thumbColor="#FFFFFF"
        />
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.item}>
        <Text style={styles.label}>Show Kobo</Text>
        <Switch
          value={showKobo}
          onValueChange={setShowKobo}
          trackColor={{ false: '#D1D1D6', true: '#34C759' }}
          thumbColor="#FFFFFF"
        />
      </View>
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
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default SettingsSection;
