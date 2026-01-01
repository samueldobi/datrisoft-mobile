import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function  AccountInput(){
  const [text, setText] = useState("");
  const [account, setAccount] = useState('');


  return (
    <TextInput
        style={styles.inputBox}
        label="Account Number"
        value={account}
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={(value) => {
            // Only allow numbers
            if (/^\d*$/.test(value)) {
            setAccount(value);
            }
        }}
    />
  );
};

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor:'fff',
        padding:10,
        marginVertical:10,
    }
})