import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { HORIZONTAL } from "react-native/Libraries/Components/ScrollView/ScrollViewContext";
import CustomButton from "../../components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import AddProductScreen from "../../screens/AddProductScreen/AddproductScreen";

interface ProductItemProps {
  item: {
    id: string,
    title: string,
    image: string,
    price: number,
  };
}

const ProductCheckOut = ({ item }: ProductItemProps) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.img}>
          <Image
            source={{ uri: item.image }}
            style={
              (styles.image,
              {
                height: 120,
                width: 115,
                borderRadius: 30,
                justifyContent: "center",
              })
            }
            resizeMode="contain"
          />
        </View>
        <View style={styles.title}>
          <Text>{item.title}</Text>
          <Text style={styles.mrp}>{item.price}</Text>
          <View style={styles.actions}>
            <Text style={styles.caption}>x</Text>
            <Text style={styles.caption}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    color: "#707070",
    fontWeight: "bold",
    top: 30,
    textAlign: "center",
  },

  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    top: 50,
  },

  i1: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    top: 30,
  },

  l1: {
    fontWeight: "bold",
  },

  root: {
    margin: 30,
    top: 38,
  },

  root1: {
    margin: 30,
    bottom: -8,
  },

  container: {
    flex: 1,
    marginTop: 2,
    paddingTop: 3,
    paddingHorizontal: 30,
  },

  box: {
    margin: 20,

    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#000",
    marginTop: 4,
    height: 185,
    flexDirection: "row",
  },

  img: {
    paddingLeft: 17,
    paddingTop: 15,
  },

  title: {
    marginTop: 5,
    marginLeft: 20,
    width: 200,
  },

  caption: {
    paddingHorizontal: 1,
  },

  actions: {
    width: 50,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: -2,
    marginRight: 50,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 2,
  },

  trash: {
    marginLeft: 170,
  },

  line1: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    marginHorizontal: 30,
    top: 30,
  },

  amount: {
    top: 40,
    marginLeft: 30,
    color: "black",
  },

  amount1: {
    top: 5,
    marginLeft: 345,
    color: "black",
    fontWeight: "bold",
  },

  mrp: {
    left: 104,
    top: 22,
  },

  // od: {
  //     top:20,

  // },
});
export default ProductCheckOut;
