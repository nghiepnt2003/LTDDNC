import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useUser } from "../src/hook/userContext";

const ProfileScreen = ({ route }) => {
  const { user, setUser } = useUser();

  return (
    <View className="flex-1 bg-white p-5">
      {/* Cover Image */}
      <Image
        source={{ uri: "https://www.bootdey.com/image/900x400/FF7F50/000000" }}
        className="h-48 w-full absolute top-0 left-0 right-0"
      />

      {/* Avatar Container */}
      <View className="items-center mt-24">
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
          }}
          className="w-30 h-30 rounded-full border-4 border-white"
        />
        <Text className="text-white text-2xl font-bold mt-2 shadow-md text-center">
          {user.username}
        </Text>
      </View>

      {/* Profile Content */}
      <View className="mt-32">
        <View className="mb-5">
          <Text className="font-bold text-lg">Fullname :</Text>
          <Text className="text-gray-700 mt-1">{user.fullname}</Text>
        </View>
        <View className="mb-5">
          <Text className="font-bold text-lg">Email :</Text>
          <Text className="text-gray-700 mt-1">{user.email}</Text>
        </View>
        <View className="mb-5">
          <Text className="font-bold text-lg">Phone :</Text>
          <Text className="text-gray-700 mt-1">{user.phone}</Text>
        </View>
        <View>
          <Text className="font-bold text-lg">Bio:</Text>
          <Text className="text-gray-700 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
