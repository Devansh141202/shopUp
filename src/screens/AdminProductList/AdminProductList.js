import React ,{useState} from "react"
import { View,Text,Image,ScrollView,FlatList,StyleSheet, useWindowDimensions,TextInput} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/Header"
// import AdminProduct from "../../components/AdminProduct"
import AdminProducts from "../../Database/AdminProducts"
import AdminProduct from "../../components/AdminProduct/AdminProduct"
import { AntDesign } from '@expo/vector-icons';

const AdminProductList = () => {

    const{height} = useWindowDimensions();
    const navigation = useNavigation();
    return(
            
            <View style = {styles.screen}>
                
                <Header/>
                
                <ScrollView>
                 <FlatList
                    data={AdminProducts}
                    renderItem={({item}) => <AdminProduct item={item} />} 
                    showsVerticalScrollIndicator={false}
                    />
                    <View>
                    <Header/>
                    </View>
                </ScrollView>
                <View style = {styles.plus}>
                <AntDesign name="pluscircleo" size={50} color="black" />
                </View>
            </View>
    )   
}

const styles = StyleSheet.create({
    screen:{
        padding:0,
       
    },
    plus:{
        bottom:175,
        left:280,
        width:50,
        borderRadius:120,
        backgroundColor:'white',
    },
    input:{
      borderWidth:2,
      borderColor:'#d1d1d1',
      borderRadius:20,
      margin:20,
      height:40,
      backgroundColor:'#fff',
    },
})
export default AdminProductList