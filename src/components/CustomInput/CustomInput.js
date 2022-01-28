import React from "react";
import { View,Text,TextInput , StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CustomInput = ({value ,setValue,placeholder , secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder = {placeholder} 
            style = {styles.input}
            secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        width : '100%',
        
        borderColor : 'white',
        borderWidth :2,
        borderBottomColor :'#707070',

        paddingHorizontal : 10,
        marginVertical :10
    },
    input : {
        fontSize : 18,
    }
})
export default CustomInput