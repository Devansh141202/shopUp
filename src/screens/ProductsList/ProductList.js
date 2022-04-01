import React ,{useState} from "react"
import { View,Text,Image,ScrollView,FlatList,StyleSheet, useWindowDimensions,TextInput} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/Header"
import Product from "../../components/Product/Product"
import Products from "../../Database/Products"

import { EvilIcons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"

const ProductList = () => {
    

    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.navigate("Drawer")
    }

    return(
            
            <View style = {styles.screen}>
                <Header/>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.scrollscreen}>
                
                <Pressable onPress={openDrawer}>
                    <View style={styles.input}>
                    <EvilIcons name="search" style={styles.icons} size={24} color="black" />
                    <TextInput
                             placeholder=" Search"
                    />
                 </View>
                 </Pressable>
                 <FlatList
                    data={Products}
                    renderItem={({item}) => <Product item={item} />} 
                    showsVerticalScrollIndicator={false}
                    />
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
    input:{
      borderWidth:1,
      borderColor:'black',
      borderRadius:20,
      margin:20,
      height:35,
      backgroundColor:'#fff',
      flexDirection:'row',
    },
    scrollscreen:{
        height:'100%',
    },
    icons:{
        marginTop:5,
        color:'black',
    }
})
export default ProductList