import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeOptions() {
  return (
    <View style={styles.container}>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="dollar-sign" size={25} color="#000" />
        </View>
        <Text style={styles.label}>Currency Swap</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="exchange-alt" size={25} color="#000" />
        </View>
        <Text style={styles.label}>Single Transfer</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name="wallet" size={25} color="#000" />
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
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#D73535',
    elevation: 4,
    shadowColor: '#D73535',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  option: {
    alignItems: 'center',
    width: '30%',
  },

  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
  },
});

