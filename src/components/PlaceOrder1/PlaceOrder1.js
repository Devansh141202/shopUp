import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Constant from "expo-constants";
import CustomButton from "../../components/CustomButton";
import Logo from "../../../assets/Images/LOGO.png";
import { getFontScale } from "react-native/Libraries/Utilities/PixelRatio";
const win = Dimensions.get("window");
import { Dimensions } from "react-native";

export default function PalceOrder1() {
  return (
    <View style={styles.header}>
      <View style={styles.ta}>
        <View>
          <Text style={styles.TA}>Total Amount</Text>
        </View>

        <View style={styles.rs}>
          <Text>$1000</Text>
        </View>
      </View>
      <View style={styles.b}>
        <CustomButton text="Confirm Order" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: "grey",
    flexDirection: "row",
    width: 440,
    marginLeft: -33,
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: Constant.statusBarHeight,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  headerText: {
    marginLeft: 8,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
  },

  b: {
    marginBottom: -10,
    width: 250,
    marginRight: 10,
    marginTop: -6,
  },

  TA: {
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 55,
  },

  rs: {
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 55,
  },
});
