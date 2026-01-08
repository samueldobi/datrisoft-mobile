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
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#D73535',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    margin: 16,
    backgroundColor: '#D73535',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  textContainer: {
    flex: 1,
  },

  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.85,
    marginBottom: 6,
  },

  balanceText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  transferText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    opacity: 0.9,
  },

  transferHistoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },

  icons: {
    fontSize: 10,
    marginLeft: 6,
  },

  // welcome header
  welcomeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 6,
  },

  welcomeTextTop: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D73535',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  placeholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D73535',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

