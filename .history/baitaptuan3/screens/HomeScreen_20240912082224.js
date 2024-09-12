import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  // return (
  //   <View className="flex-1 justify-center items-center">
  //     <Text className="text-2xl font-bold">Welcome to the Homepage!</Text>
  //     <TouchableOpacity
  //       className="bg-blue-600 py-3 px-6 rounded-md mt-4"
  //       onPress={() => navigation.navigate("Profile")}
  //     >
  //       <Text className="text-white font-bold">Profile</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity
  //       className="bg-blue-600 py-3 px-6 rounded-md mt-4"
  //       onPress={() => navigation.navigate("EditProfile")}
  //     >
  //       <Text className="text-white font-bold">Edit Profile</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
export default HomeScreen;
