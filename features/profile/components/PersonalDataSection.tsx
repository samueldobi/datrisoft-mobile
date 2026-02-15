import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


type PersonalDataProps ={
  fullName:string,
  phoneNumber:string,
  email:string
}
const PersonalDataSection = ({ fullName, phoneNumber, email }:PersonalDataProps) => {
  return (
    <View style={styles.container}>
      <View style = {{flexDirection:"row", alignItems: "center", gap:8, marginTop:10}}>
        <Ionicons name="person" size={24} color="#D73535" />
        <Text style={styles.sectionTitle}>Personal Data</Text>
      </View>
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>{fullName}</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>{phoneNumber}</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <TouchableOpacity style={styles.item}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
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
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  item: {
    paddingVertical: 12,
  },
  label: {
    fontSize: 13,
    color: '#999999',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default PersonalDataSection;
