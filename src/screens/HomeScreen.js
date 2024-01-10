import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
  const navigation = useNavigation();
  const handleImagePress = () => {
    navigation.navigate('Item');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Entypo name="menu" size={24} color="#000" />
        <View style={styles.circleContainer}>
          <Feather name="search" size={24} color="#fff" />
        </View>
      </View>
      <Text style={styles.textHi}>Hi Alex</Text>
      <Text style={styles.textDelicious}>Find your Delicious Food</Text>
      <View style={styles.itemsContainer}>
        <Image source={require("../../assets/images/food1.png")} />
        <Image source={require("../../assets/images/food2.png")} />
        <Image source={require("../../assets/images/food3.png")} />
        <Image source={require("../../assets/images/food4.png")} />
      </View>
      <View style={styles.textPopularContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 21 }}>Popular</Text>
      </View>
      <View style={styles.popularItemContainer}>
        <View style={styles.popularIamges}>
          <TouchableOpacity onPress = {handleImagePress}>
          <Image
            source={require("../../assets/images/meltingChease1.png")}
          />
          </TouchableOpacity>
          <Image source={require("../../assets/images/meltingChease2.png")} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  circleContainer: {
    backgroundColor: "#f97372",
    borderRadius: 100,
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderHeight: 2,
    padding: 5,
  },
  textHi: {
    color: "#f97372",
    paddingLeft: 10,
  },
  textDelicious: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
  },
  itemsContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  textPopularContainer: {
    paddingLeft: 10,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  popularItemContainer: {
    marginBottom: 20,
  },
  popularIamges: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f97372",
    marginTop: 15,
    borderWidth: 3,
    borderHeight: 3,
    borderColor: "#fff",
    borderRadius: 100,
    padding: 15,
  },
  buttonText: {
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
