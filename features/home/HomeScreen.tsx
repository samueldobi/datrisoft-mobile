import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyles } from "./styles";
import WelcomeCard from "./components/WelcomeCard";
import HomeOptions from "./components/OptionsCard";
import { useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    return(
         <SafeAreaView style={{ flex: 1}} >

          <View >

          <View>
            <WelcomeCard 
            name="Iyke"
            subtitle="Available Balance:"
            balance={47000}
            onPressTransfers={()=>router.push('/transfers')}
            onPressSeeHistory={()=>console.log('See  History')}
            />
          </View> 

          <View>
            <HomeOptions/>
          </View> 
          
          </View>
        </SafeAreaView>

    )
}