import { useAuth,AuthProvider } from "@/context/AuthContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack , useRouter, useSegments} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "../global.css";
// import 'react-native-reanimated';


import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
//    Ensure that reloading on `/modal` keeps a back button present.
   initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <AuthProvider>
      <RootLayoutNav />
    // </AuthProvider>

  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // const {user} = useAuth();
  // const segments = useSegments();
  // const router = useRouter();
  //   console.log('Current user:', user);
  // console.log('Current segments:', segments);
  // useEffect(()=>{
  //   console.log('User changed:', user); 
  //     // if (user === undefined) return;
  //     if(!user){
  //       router.replace('/(auth)/sign-in')
  //     }else{
  //       router.replace('/(tabs)');
  //     }
  // },[user])
 
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </ThemeProvider>
  );
}
