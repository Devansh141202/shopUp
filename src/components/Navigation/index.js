import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import AddproductScreen from '../../screens/AddProductScreen/AddproductScreen'
import Loading from '../../screens/Loading/Loading';
import ProductList from '../../screens/ProductsList/ProductList';
import AdminProductList from '../../screens/AdminProductList/AdminProductList';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import Profile from '../../screens/Profile/Profile'



const Stack = createNativeStackNavigator();

const Navigation = () =>
{
    return(
        <NavigationContainer  >
            <Stack.Navigator style={styles.container} screenOptions = {{headerShown : false}}>
                
                <Stack.Screen name = "SignUp" component = {SignUpScreen}/>
                <Stack.Screen name = "SignIn" component = {SignInScreen}/>
                <Stack.Screen name = "ProductList"  component = {ProductList}/>
                <Stack.Screen name = "Profile"  component = {Profile}/>
                
                
                {/* <Stack.Screen name = "MyCart" component = {MyCart}/> */}
                <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
    
                <Stack.Screen name = "AdminProductList"  component = {AdminProductList}/>
                <Stack.Screen name = "AddProduct" component = {AddproductScreen}/>
                <Stack.Screen name = "Loading"  component = {Loading}/>
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