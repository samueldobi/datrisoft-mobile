import React from 'react';
import { View, Text, StyleSheet, Image,Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type WelcomeCardProps = {
  name: string;
  subtitle?: string;
  balance?:number;
  onPressTransfers?: ()=>void;
  onPressSeeHistory?: ()=>void;
};

export default function WelcomeCard({
  name ,
  subtitle,
  balance,
  onPressTransfers,
  onPressSeeHistory,
}: WelcomeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome, {name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.subtitle}>₦{balance}</Text>
        </View>

        <View>
            <Pressable onPress={onPressTransfers}>
            <Text style ={styles.transferText}  selectable={false}>
                Transfer 
                <FontAwesome name='arrow-right' style={styles.icons} />
            </Text>
            </Pressable>

            <Pressable onPress={onPressSeeHistory}>
            <Text style ={styles.transferHistoryText}>
                See History
                <FontAwesome name='arrow-right' style={styles.icons} />
            </Text>
            </Pressable>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1dcf7c',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'#fff',
  },
  subtitle: {
    fontSize: 14,
    color:'#fff',
    marginTop:5,
  },
  transferText:{
    color:'#fff',
    fontSize:15,
    padding:5,
    margin:3,
  },
  transferHistoryText:{
    color:'#fff',
    fontSize:15,
    padding:5,
    margin:3,
  },
  icons:{
    fontSize:10,
    padding:10,
    // marginRight:15,
  }
});
