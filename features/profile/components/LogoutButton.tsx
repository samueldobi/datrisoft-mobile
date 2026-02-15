import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogoutButton = () => {
  const handleLogout = () => {
    // Logout logic will be implemented here
    console.log('Logout pressed');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
});

export default LogoutButton;
