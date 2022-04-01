import React ,{useState} from "react"
import { View,ScrollView,Text,Image,Pressable,FlatList,StyleSheet, useWindowDimensions,TextInput} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/Header"
import tool from "../../../assets/Images/tool.webp"
import OrdersData from "../../Database/OrdersData"
import Orders from "../../components/Orders/Orders"
import profilePic from "../../../assets/Images/profilePic.jpg"
import CustomButton from "../../components/CustomButton"

const Profile = () => {

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const OnLogInPressed = () => {
        console.warn( 'Logout...' )
        navigation.navigate("SignIn")
    }

    const OnLogInPressed2 = () => {
        console.warn( 'Logout...' )
        navigation.navigate("SignUp")
    }

    return(
            
            <View style = {styles.screen}>
                <Header/>
                <ScrollView>
                <Pressable onPress={OnLogInPressed2}>
                <View style = {styles.ProfilePhoto} >
                    <Image source={profilePic}  resizeMode="contain" style = {styles.profilePic}/>
                </View>
                </Pressable>
                <View style = {styles.greet}>
                    <Text>Welcome, First Name</Text>
                </View>
                <View style = {styles.mail}>
                    <Text>xyz@gmail.com</Text>
                </View>
                <View style = {styles.WallText}>
                    <Text>Your Orders</Text>
                </View>
                
                    <FlatList
                    data={OrdersData}
                    renderItem={({item}) => <Orders item={item} />} 
                    showsVerticalScrollIndicator={false}
                    />
                    
                        <View style = {styles.logout} >
                            <CustomButton text="Logout" onPress={OnLogInPressed}/>
                        </View>
                    
                    <View>
                    <Header/>
                    </View>
                </ScrollView>
            </View>
    )   
}

const styles = StyleSheet.create({
    screen:{
        padding:0,
        
    },
    logout:{
        width:300,
        left:30,
    },
    profilePic:{
        height:150,
        width:150,
        borderRadius:1000,
    },
    input:{
      borderWidth:2,
      borderColor:'#d1d1d1',
      borderRadius:20,
      margin:20,
      height:40,
      backgroundColor:'#fff',
    },
    ProfilePhoto:{
        marginTop:50,
        alignSelf:'center',
    },
    greet:{
        marginTop:20,
        alignSelf:'center',
    },
    mail:{
        marginTop:10,
        alignSelf:'center',
    },
    WallText:{
        marginTop:30,
        marginLeft:30,
    }
})
export default Profile