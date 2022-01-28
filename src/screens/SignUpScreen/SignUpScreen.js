import React ,{useState} from "react"
import { View,Text,Image ,StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from '../../../assets/Images/LOGO.png'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"

const SignUpScreen = () => {
    const [Fname , setFname] = useState('');
    const [Lname , setLname] = useState('');
    const [Email , setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [password1 , setPassword1] = useState('');
    const [password2 , setPassword2] = useState('');
    const [Phone , setPhone] = useState('');
    
    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const OnSignUpPressed = () => {
        console.warn( 'User Created successfully' )
        // validate the data entered
        navigation.navigate('SignIn')

    }
    const OnLoginPressed = () => {
        console.warn( 'Login Pressed' )

        navigation.navigate('SignIn')
    }
    return(
        <ScrollView >
            <View style = {styles.root}>
                <Image source={Logo} 
                style = {styles.logo,{height: height*0.3}} 
                resizeMode="contain"/>

                <Text style= {styles.text} > Create a Account </Text>

                <CustomInput  placeholder="First Name"  value={Fname} setValue={setFname} />
                <CustomInput  placeholder="Last Name"  value={Lname} setValue={setLname} />
                <CustomInput  placeholder="Email"  value={Email} setValue={setEmail} />
                <CustomInput  placeholder="User Name"  value={username} setValue={setUsername} />
                <CustomInput  placeholder= "Password" value={password1} setValue={setPassword1} secureTextEntry={true}/>
                <CustomInput  placeholder= "Re-enter Password" value={password2} setValue={setPassword2} secureTextEntry={true}/>
                <CustomInput  placeholder="Phone No."  value={Phone} setValue={setPhone} />
                <CustomButton text="Sign Up"  onPress={OnSignUpPressed} />
                <CustomButton text="Already have an account? Login"  onPress={OnLoginPressed  } type='TERTIARY'/>
            </View>
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    root :{
        alignItems : 'center',
        padding : 30,
        backgroundColor : "white"
        
    },
    logo : {
        width : '10%',
        maxWidth :200,
        maxHeight :100,
    },
    text:{
        fontWeight : 'bold',
        color :"#707070",
        fontSize : 24,
        marginBottom: 20,
    },
})
export default SignUpScreen