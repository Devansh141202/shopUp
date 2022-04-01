import React from 'react';
import {View, Image, Text,StyleSheet} from 'react-native';
import tool from "../../../assets/Images/tool.webp"
import { AntDesign } from '@expo/vector-icons';

interface ProductItemProps
{
  item :{
    id: string;
    title: string;
    image: string;
    price: number;
    total: number;
  }
}

export default function Orders({item} : ProductItemProps) {
   
  return (
        <View style={styles.root}>
                  <Image source={{uri:item.image}} 
                    resizeMode="contain" 
                    style={styles.Image}
                    />
                  
                    <View style={styles.sideContainer}>
                      <Text style={styles.title} numberOfLines={3} >{item.title}</Text>
                      <Text style={styles.price}>${item.price}</Text>
                      <Text style={styles.total}>{item.total}</Text>
                  </View>
                  <View style={styles.del}>
                    <AntDesign name="delete" size={24} color="black" />
                  </View>
                </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:0,

    },
    del:{
        marginTop:35,
        marginLeft:40,
    },
    price:{
      marginTop:0,
      fontWeight:'bold',
    },
    title : {
      marginTop:0,
      marginLeft:0,
      width:150,
    },
    total:{
        marginTop:0,
        marginLeft:0,
    },
    root:{
      margin:20,
      padding:20,
      borderWidth:1,
      borderColor:'black',
      borderRadius:40,
      backgroundColor:'#fff',
      flexDirection:'row',
      marginTop:5,
    },
    sideContainer:{
      justifyContent:'space-between',
      flexDirection:'column',
      marginLeft:30,
    },
    Image:{ 
        width: 100,
        height: 100,
        alignSelf:'center',
    },
    data:{
      justifyContent:'space-between',
      flexDirection:'row',
    },
    input:{
      borderWidth:2,
      borderColor:'#d1d1d1',
      borderRadius:20,
      margin:20,
      backgroundColor:'#fff',
    },
    
})