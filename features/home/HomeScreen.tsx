import { View, ScrollView,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { homeStyles } from "./styles";
import WelcomeCard from "./components/WelcomeCard";
import HomeOptions from "./components/OptionsCard";
import PreviousTransfers from "./components/PreviousTransfers";
import { AccountsCard } from "./components/AccountsCard";
import { useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    return(
         <SafeAreaView  edges={['left', 'right', 'bottom']}>
           <FlatList
            showsVerticalScrollIndicator={false}
             data={[]}              
        ListHeaderComponent={
          <>
            <WelcomeCard 
            name="Iyke"
            subtitle="Available Balance:"
            balance={470000}
            onPressTransfers={()=>router.push('/transfers')}
            onPressSeeHistory={()=>router.push('/transfers/confirmTransfer')}
            />
            <AccountsCard />
            <HomeOptions />
            <PreviousTransfers/>
          </>
        }
        contentContainerStyle={{ paddingBottom: 10 }}
      />
            
            {/* <View>
            <WelcomeCard 
            name="Iyke"
            subtitle="Available Balance:"
            balance={470000}
            onPressTransfers={()=>router.push('/transfers')}
            onPressSeeHistory={()=>router.push('/transfers/confirmTransfer')}
            />
          </View> 

          <View>
            <AccountsCard/>
          </View>

          <View>
            <HomeOptions/>
          </View> 

          <View>
            <PreviousTransfers/>
          </View> */}
          
          
        </SafeAreaView>

    )
}