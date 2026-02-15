import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProfileHeaderProps ={
  name:string,
  accountNumber:string
}
const ProfileHeader = ({ name, accountNumber }:ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {name}</Text>
      <Text style={styles.accountNumber}>Account Number: {accountNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  accountNumber: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '400',
  },
});

export default ProfileHeader;
