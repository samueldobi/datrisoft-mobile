import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LogoutButton = () => {
  const handleLogout = () => {
    // Logout logic will be implemented here
    console.log('Logout pressed');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogout}>
      <View style = {{flexDirection:"row", alignItems: "center", gap:8, marginTop:10}}>
      <Text style={styles.text}>Logout</Text>
        <MaterialIcons name="logout" size={24} color="#D73535" />
      </View>
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
    color: '#D73535',
    fontWeight: '600',
  },
});

export default LogoutButton;
