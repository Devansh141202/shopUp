import React ,{useState} from "react"
import { View,Text,Image ,StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from '../../../assets/Images/LOGO.png'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"

const SignInScreen = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const OnLogInPressed = () => {
        console.warn( 'Login pressed' )
        // validate user

        navigation.navigate("HomeScreen")
    }
    const OnSignUpPressed = () => {
        console.warn( 'Sign Up' )

        navigation.navigate('SignUp')
    }
    return(
            <View style = {styles.root}>
                <Image source={Logo} 
                style = {styles.logo,{height: height*0.3}} 
                resizeMode="contain"/>

                <Text style= {styles.text} > Login </Text>

                <CustomInput  placeholder="User Name"  value={username} setValue={setUsername} />
                <CustomInput  placeholder= "Password" value={password} setValue={setPassword} secureTextEntry={true} />

                <CustomButton text="Login"  onPress={OnLogInPressed} />
                <CustomButton text="Don't have an account? Sign Up"  onPress={OnSignUpPressed  } type='TERTIARY'/>
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
        width : '30%',
        maxWidth :100,
        maxHeight : 150,
    },
    text:{
        fontWeight : 'bold',
        color :"#707070",
        fontSize : 30,
        marginBottom: 30,
    },
})
export default SignInScreen