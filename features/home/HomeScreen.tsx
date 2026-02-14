import { View, ScrollView,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { homeStyles } from "./styles";
import WelcomeCard from "./components/WelcomeCard";
import HomeOptions from "./components/OptionsCard";
import PreviousTransfers from "./components/PreviousTransfers";
import { AccountsCard } from "./components/AccountsCard";
import { FundAccounts } from "./components/FundAccount";
import { useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    return(
         <SafeAreaView  edges={['left', 'right',]} style ={{paddingLeft: 10, paddingTop: 10,}}>
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
            onPressSeeHistory={()=>router.push('/transfers')}
            />
            <AccountsCard />
            <FundAccounts/>
            <HomeOptions />
            <PreviousTransfers/>
          </>
        }
        contentContainerStyle={{ paddingBottom: 0 }}
      />
      </SafeAreaView>

    )
}