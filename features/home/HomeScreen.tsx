import { View, Text } from "@/components/Themed";
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyles } from "./styles";
import WelcomeCard from "./components/WelcomeCard";
import { useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    return(
         <SafeAreaView >
          <View>
            <WelcomeCard 
            name="Iyke"
            subtitle="Available Balance:"
            balance={47000}
            onPressTransfers={()=>router.push('/transfers')}
            onPressSeeHistory={()=>console.log('See  History')}
            />
          </View>  
        </SafeAreaView>

    )
}