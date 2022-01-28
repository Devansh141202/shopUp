import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import AddproductScreen from '../../screens/AddProductScreen/AddproductScreen'
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer  >
            <Stack.Navigator style={styles.container} screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "SignIn" component = {SignInScreen}/>
                <Stack.Screen name = "SignUp" component = {SignUpScreen}/>
                <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
                {/* <Stack.Screen name = "AddProduct" component = {AddproductScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container :{
        alignItems : 'center',
        padding : 20,
        backgroundColor : "red"
        
    },
})
export default Navigation;