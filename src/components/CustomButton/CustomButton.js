import React from "react";
import { View,Text,StyleSheet,Pressable } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CustomButton = ({onPress , text ,type ="PRIMARY"}) => {
    return(
        <Pressable onPress={onPress} style = {[styles.container ,styles[`container_${type}`]]}>
            <Text style = {[styles.text,styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
        width :'100%',
        padding : 15, 
        marginVertical :15,
        alignItems : 'center',
        borderRadius :10,
    },
    container_PRIMARY :{
        backgroundColor : '#3B71F3',
    },
    container_TERTIARY : {
        
    },
    text:{
        fontWeight : 'bold',
        color : 'white',
        fontSize : 18
    },
    text_TERTIARY :{
        color : '#707070'
    }
})

export default CustomButton