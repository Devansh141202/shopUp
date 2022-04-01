import React from 'react';
import {StyleSheet, Text, View,Image,useWindowDimensions,Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants'
import Logo from '../../../assets/Images/LOGO.png'
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio';
const win = Dimensions.get('window');
import { Dimensions } from "react-native";
export default function Header()
{
    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const opencart = () => {
        navigation.navigate("MyCart")
    }

    return (
        <View style={styles.header}>
            <View style = {styles.headerText}>
                <Entypo name="menu" size={25} color="black" />
            </View>

            <View style={styles.logo}>
                <Image source={Logo} resizeMode="contain" style={{ width: 70, height: 70 }}/>
            </View>
            <Pressable onPress={opencart}>
                <View style= {styles.cart}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    header : {
        height:40,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:Constant.statusBarHeight,
    },
    logo :{ 
    width:80,
    height:40,
    resizeMode: 'contain',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf: "center",
   
    marginBottom:30,
    },
    headerText:{
        marginLeft:8,
        marginTop:5, 
    },
    text:{
        fontSize:20,
        marginTop:5,
    },
    cart:{
        marginRight:8,
        marginTop:5,
    }
})

// // const styles = StyleSheet.create({
//     header : {
//     //     width : '100%',
//     //     height : '100%',
//     //     flexDirection : 'row',
//     //     alignItems :'center',
//     //     justfycontent : 'center',
//     // },
//     // headerText: {
//     //     fontWeight : 'bold',
//     //     fontsize : 20,
//     //     color : '#333',
//     //     laterSpacing : 1,
//     // },
// })