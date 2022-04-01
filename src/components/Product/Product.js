import React from 'react';
import {View, Image, Text,StyleSheet} from 'react-native';
import tool from "../../../assets/Images/tool.webp"

interface ProductItemProps
{
  item :{
    id: string;
    title: string;
    image: string;
    price: number;
    
  }
}

export default function Product({item} : ProductItemProps) {
   
  return (
        <View style={styles.root}>
                
                  <Image source={{uri: item.image}} resizeMode="contain" 
                  style={styles.Image}
                  />
                  <View style={styles.block}> 
                    <View style={styles.downContainer}>
                      <View>
                      <Text style={styles.title} numberOfLines={4} >{item.title}</Text>
                      </View>
                      <View>
                      <Text style={styles.price}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:0,

    },
    price:{
      marginTop:8,
      marginRight:20,
      fontWeight:'bold',
    },
    title : {
      flex:1,
      marginTop:8,
      marginLeft:20,
      width:200,
    },
    root:{
      margin:25,
      marginTop:2,
      borderWidth:1,
      borderColor:'black',
      borderRadius:40,
      backgroundColor:'#fff',
    },
    downContainer:{
      justifyContent:'space-between',
      flexDirection:'row',
      height:100,
    },
    Image:{ 
        width: 150,
        height: 150,
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
    block:{
      height:70,
      borderTopWidth:1,
      borderTopColor:'black',
    }
})