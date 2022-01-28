import React ,{useState} from "react"
import { View,Text,Image ,StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from '../../../assets/Images/LOGO.png'

const HomeScreen = () =>{

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    return(
        <View style = {styles.root}>
            <Image source={Logo} style = {styles.logo} resizeMode="contain"/>
            <Text style = {styles.text} >Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root :{
        height :"100%",
        alignItems : 'center',
        padding : 30,
        backgroundColor : 'white',
        marginBottom : "100%"
        
    },
    logo : {
        width : '50%',
        maxWidth :250,
        maxHeight : 200,
        marginTop : "100%",
        marginBottom : 20,
    },
    text:{
        fontWeight : 'bold',
        color :"#707070",
        fontSize : 30,
        marginBottom: 30,
    },
})

export default HomeScreen;