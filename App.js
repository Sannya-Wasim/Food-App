import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center">
    <View> 
      {/* <SplashScreen/> */}
      {/* <WelcomeScreen/> */}
      {/* <Login/> */}
      <SignUp/>
      <StatusBar style="auto" />
    </View>
  );
}
