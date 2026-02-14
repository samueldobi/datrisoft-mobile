import { StyleSheet } from 'react-native';
import HomeScreen from '@/features/home/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
        <SafeAreaView>
          <HomeScreen/>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
