import React ,{useState} from "react"
import { View,Text,Image ,StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from '../../../assets/Images/LOGO.png'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"

const AddProductScreen = () => {
    const [ProductName,setProductName] = useState('');
    const [MRP,setMRP] = useState(''); 
    const [ModelNo,setModelNo] = useState('');
    const [Material,setMaterial] = useState('');
    const [Qtybox,setQtybox] = useState('');
    const [Qtycase,setQtycase] = useState('');
    const [Desc,setDesc] = useState('');
    const [ImageURL,setImageURL] = useState('');
    
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

                <Text style= {styles.text} > Add Product </Text>

                <CustomInput  placeholder="Product Name"  value={ProductName} setValue={setProductName} />
                <CustomInput  placeholder="MRP"  value={MRP} setValue={setMRP} />
                <CustomInput  placeholder="Model No."  value={ModelNo} setValue={setModelNo} />
                <CustomInput  placeholder="Material"  value={Material} setValue={setMaterial} />
                <CustomInput  placeholder="Quantity in box"  value={Qtybox} setValue={setQtybox} />
                <CustomInput  placeholder="Quantity in case"  value={Qtycase} setValue={setQtycase} />
                <CustomInput  placeholder="Description"  value={Desc} setValue={setDesc} />
                <CustomInput  placeholder="Image URL"  value={ImageURL} setValue={setImageURL} />
                
                <CustomButton text="Add Product"  onPress={OnSignUpPressed} />
            </View>
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    root :{
        alignItems : 'center',
        padding : 30,
        backgroundColor : "white" ,
        
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
        marginTop :-40,
    },
})
export default AddProductScreen