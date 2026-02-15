import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import PersonalDataSection from './components/PersonalDataSection';
import SettingsSection from './components/SettingsSection';
import SecuritySection from './components/SecuritySection';
import LogoutButton from './components/LogoutButton';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader 
        name="John Doe"
        accountNumber="1234567890"
      />
      
      <PersonalDataSection 
        fullName="John Doe"
        phoneNumber="080********45"
        email="joh*****@gmail.com"
      />
      
      <SettingsSection />
      
      <SecuritySection />
      
      <LogoutButton />
      
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bottomSpacing: {
    height: 30,
  },
});

export default ProfileScreen;
