import { Pressable,Text,StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TransferAction({ icon, label }: { icon: any; label: string }) {
  return (
    <Pressable style={styles.actionBox}>
      <FontAwesome5 name={icon} size={22} color="#1dcf7c" />
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  actionBox: {
    width: '30%',
    backgroundColor: '#f2fdf8',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 18,
  },

  actionLabel: {
    marginTop: 8,
    color: '#333',
    fontWeight: '600',
  },
});
