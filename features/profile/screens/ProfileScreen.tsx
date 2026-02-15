// import ProfileHeader from "../components/ProfileHeader";
// import PersonalDataSection from "../components/PersonalDataSection";
// import SettingsSection from "../components/SettingsSection";
// import SecuritySection from "../components/SecuritySection";
// import LogoutButton from "../components/LogoutButton";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from "react-native";
// export default function ProfileScreen(){
//     return(
//         <>
//         <SafeAreaView  edges={['left', 'top', 'right',]} style ={{paddingLeft: 10, paddingTop: 10,}}>
//         <ScrollView>
//          <ProfileHeader name={"iyke"} accountNumber = "563849320 "/>
//          <PersonalDataSection fullName="iyke" phoneNumber = "049304" email="iyke@gmail.com" />
//          <SettingsSection/>
//          <SecuritySection/>
//          <LogoutButton/>
//         </ScrollView>
//         </SafeAreaView>
//         </>
//     )
// }
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/ProfileHeader';
import PersonalDataSection from '../components/PersonalDataSection';
import SettingsSection from '../components/SettingsSection';
import SecuritySection from '../components/SecuritySection';
import LogoutButton from '../components/LogoutButton';

const ProfileScreen = () => {
  return (
    <SafeAreaView  edges={['left', 'top', 'right',]} style ={{  flex: 1, paddingLeft: 10, paddingTop: 10,}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader 
        name="John Doe"
        accountNumber="1234567890"
      />
      
      <PersonalDataSection 
        fullName="John Doe"
        phoneNumber="080********45"
        email="joh*****@gmail.com"
      />
      
      <SettingsSection />
      
      <SecuritySection />
      
      <LogoutButton />
      
      <View style={styles.bottomSpacing} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bottomSpacing: {
    height: 30,
  },
});

export default ProfileScreen;
