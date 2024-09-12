import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../src/hook/userContext";

const ProfileScreen = ({ route }) => {
  const { user, setUser } = useUser();

  return (
    <View className="flex-1 p-5 bg-gray-100">
      <Text className="text-3xl font-bold mb-6 text-center text-gray-800">
        Profile
      </Text>

      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-700">Username:</Text>
        <Text className="text-base text-gray-600">{user.username}</Text>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-700">Full Name:</Text>
        <Text className="text-base text-gray-600">{user.fullname}</Text>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-700">Email:</Text>
        <Text className="text-base text-gray-600">{user.email}</Text>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-700">Phone:</Text>
        <Text className="text-base text-gray-600">{user.phone}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
