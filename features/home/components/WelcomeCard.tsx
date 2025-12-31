import React from 'react';
import { View, Text, StyleSheet,Pressable,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type WelcomeCardProps = {
  name: string;
  avatarUri?: string;
  subtitle?: string;
  balance?:number;
  onPressTransfers?: ()=>void;
  onPressSeeHistory?: ()=>void;
};

export default function WelcomeCard({
  name ,
  subtitle,
  avatarUri,
  balance,
  onPressTransfers,
  onPressSeeHistory,
}: WelcomeCardProps) {
  return (
    <View>

   <View style={styles.welcomeBox}>
      <Text style={styles.welcomeTextTop}>Welcome, {name}</Text>
      <View style={styles.avatarCircle}>
        <FontAwesome name= 'user-plus' size={20} color="#fff" />
      </View>
      
    
    </View>


       <View style={styles.card}>
      <View style={styles.row}>
        
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.balanceText}>₦{balance}</Text>
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
    fontSize: 18,
    color:'#fff',
    marginVertical:5,
  },
  balanceText: {
    fontSize: 24,
    color:'#fff',
    marginVertical:5,
  },
  transferText:{
    color:'#fff',
    fontSize:18,
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
  },


  // card container for welcome name
   welcomeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingLeft:10,
    paddingRight:10,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1dcf7c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  placeholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1dcf7c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  placeholderText: {
    color: 'white',
    fontWeight: '600',
  },
  welcomeTextTop: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111827',
  },
});
