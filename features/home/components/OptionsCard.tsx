import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeOptions() {
  return (
    <View style={styles.container}>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="dollar-sign" size={25} color="#1dcf7c" />
        </View>
        <Text style={styles.label}>Currency Swap</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="exchange-alt" size={25} color="#1dcf7c" />
        </View>
        <Text style={styles.label}>Single Transfer</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="wallet" size={25} color="#1dcf7c" />
        </View>
        <Text style={styles.label}>Multi Transfer</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 12,
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

  option: {
    alignItems: 'center',
    width: '30%',
  },

  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
  },
});
