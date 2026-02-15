import ProfileHeader from "../components/ProfileHeader";
import PersonalDataSection from "../components/PersonalDataSection";
import SettingsSection from "../components/SettingsSection";
import SecuritySection from "../components/SecuritySection";
import LogoutButton from "../components/LogoutButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from "react-native";
export default function ProfileScreen(){
    return(
        <>
        <SafeAreaView  edges={['left', 'top', 'right',]} style ={{paddingLeft: 10, paddingTop: 10,}}>
        <ScrollView>
         <ProfileHeader name={"iyke"} accountNumber = "563849320 "/>
         <PersonalDataSection fullName="iyke" phoneNumber = "049304" email="iyke@gmail.com" />
         <SettingsSection/>
         <SecuritySection/>
         <LogoutButton/>
        </ScrollView>
        </SafeAreaView>
        </>
    )
}