import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useUser } from "../src/hook/userContext";

const ProfileScreen = ({ route }) => {
  const { user, setUser } = useUser();

  //   return (
  //     <View className="flex-1 p-5 bg-gray-100">
  //       <Text className="text-3xl font-bold mb-6 text-center text-gray-800">
  //         Profile
  //       </Text>

  //       <View className="mb-4">
  //         <Text className="text-lg font-semibold text-gray-700">Username:</Text>
  //         <Text className="text-base text-gray-600">{user.username}</Text>
  //       </View>

  //       <View className="mb-4">
  //         <Text className="text-lg font-semibold text-gray-700">Full Name:</Text>
  //         <Text className="text-base text-gray-600">{user.fullname}</Text>
  //       </View>

  //       <View className="mb-4">
  //         <Text className="text-lg font-semibold text-gray-700">Email:</Text>
  //         <Text className="text-base text-gray-600">{user.email}</Text>
  //       </View>

  //       <View className="mb-4">
  //         <Text className="text-lg font-semibold text-gray-700">Phone:</Text>
  //         <Text className="text-base text-gray-600">{user.phone}</Text>
  //       </View>
  //     </View>
  //   );

  //   <Image
  //   source={{ uri: "https://www.bootdey.com/image/900x400/FF7F50/000000" }}
  //   style={styles.coverImage}
  // />

  //   <Image
  //   source={{
  //     uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
  //   }}
  //   style={styles.avatar}
  // />
  return (
    <View className="flex-1 bg-white p-5">
      {/* Cover Image */}
      <Image
        source={{ uri: "https://www.bootdey.com/image/900x400/FF7F50/000000" }}
        className="h-48 absolute top-0 left-0 right-0"
      />

      {/* Avatar and Name */}
      <View className="items-center mt-20">
        {/* <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
          }}
          className="w-30 h-30 rounded-full"
        /> */}
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
          }}
          style={styles.avatar}
        />
        <Text className="text-white text-2xl font-bold mt-2 shadow-md">
          {user.username}
        </Text>
      </View>

      {/* Content */}
      <View className="mt-24 px-4">
        <View className="mb-5">
          <Text className="font-bold">Fullname:</Text>
          <Text className="mt-1 text-gray-700">{user.fullname}</Text>
        </View>
        <View className="mb-5">
          <Text className="font-bold">Email:</Text>
          <Text className="mt-1 text-gray-700">{user.email}</Text>
        </View>
        <View className="mb-5">
          <Text className="font-bold">Phone:</Text>
          <Text className="mt-1 text-gray-700">{user.phone}</Text>
        </View>
        <View>
          <Text className="font-bold">Bio:</Text>
          <Text className="mt-1 text-gray-700">
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
