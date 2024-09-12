import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Welcome to the Homepage!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <Text className="text-blue-600 mt-4">Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
