import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
export default function ItemScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={{fontSize: 30, fontWeight: "bold" }}>
            Melting Chease
          </Text>
          <Text style = {{fontSize:25}}><Text style = {{fontSize:20,color:"#f97372"}}>$</Text>{" "}9.47</Text>
        </View>

       
        <Image source={require("../../assets/images/pizza5.png")} />
        <View style={{ alignItems: "center" }}><Text>- 2 +</Text>
        <Text>$19.34</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.circleContainer}></View>
          <View style={styles.circleContainer}></View>
          <View style={styles.circleContainer}></View>
        </View>
        <View style = {{alignItems:"center"}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flewDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  circleContainer: {
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
  },
    button: {
    alignItems: "center",
    backgroundColor: "#f97372",
    borderWidth: 40,
    borderColor: "#fff",
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});

