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
    <View className="flex-1">
      <View className="bg-blue-500 h-48 justify-center items-center">
        <Text className="text-white text-3xl font-bold">Home Page</Text>
      </View>

      <View className="flex-1 mt-10">
        <View className="flex-1 items-center p-8">
          <TouchableOpacity
            className="mt-2 h-11 w-64 flex-row justify-center items-center rounded-full bg-blue-500"
            onPress={() => navigation.navigate("Profile")}
          >
            <Text className="text-white text-base">Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-2 h-11 w-64 flex-row justify-center items-center rounded-full bg-blue-500"
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text className="text-white text-base">Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
