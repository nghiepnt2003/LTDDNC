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
        <View style={styles.headerContent}>
          <Text style={styles.name}>Home page </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}></View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Home</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}></View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Settings</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}></View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>News</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}></View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Shop</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
export default HomeScreen;
