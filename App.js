import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button ,Image } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import Navigation from './src/components/Navigation';

import AddproductScreen from './src/screens/AddProductScreen/AddproductScreen'; 
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
