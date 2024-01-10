import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetStartedScreen ({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageConatiner}>
        <Image source={require("../../assets/images/delivery-man.png")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text1}>
          Quick Delivery at your{" "}
          <Text style={{ color: "#f97372" }}>Doorstep</Text>
        </Text>
        <Text style={styles.text2}>
          Home delivery and online reservation system for restaurants and cafes
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f97372",
  },
  imageConatiner: {
    flex: 0.9,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    paddingTop: 10,
  },
  text1: {
    color: "#4f4f4f",
    fontSize: 34.5,
    fontWeight: "bold",
  },
  text2: {
    color: "#bdbdbd",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f97372",
    borderWidth: 5,
    borderColor: "#fff",
    borderRadius: 50,
    width: 150,
    padding: 10,
  },
  buttonText: {
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
