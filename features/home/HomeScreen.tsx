import { View, Text } from "@/components/Themed";
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyles } from "./styles";
import WelcomeCard from "./components/WelcomeCard";

export default function HomeScreen(){
    return(
         <SafeAreaView >
          <View>
            <WelcomeCard/>
          </View>  
        </SafeAreaView>

    )
}