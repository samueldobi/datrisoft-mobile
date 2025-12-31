import { View, Text, FlatList, StyleSheet } from 'react-native';
import { transfers } from '../data';

export default function PreviousTransfers(){
    return(
        <View style={styles.container}>
      <Text style={styles.title}>Recent Transfers</Text>

      <FlatList
        data={transfers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <Text
              style={[
                styles.amount,
                item.type === 'credit' ? styles.credit : styles.debit,
              ]}
            >
              {item.type === 'credit' ? '+' : '-'}₦{item.amount.toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
  },
  amount: {
    fontSize: 15,
    fontWeight: '600',
  },
  credit: {
    color: '#16A34A',
  },
  debit: {
    color: '#DC2626',
  },
});
