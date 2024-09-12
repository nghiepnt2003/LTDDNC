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
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://www.bootdey.com/image/900x400/FF7F50/000000" }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, styles.textWithShadow]}>Jane Doe</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Username</Text>
          <Text style={styles.infoValue}>{user.username}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Fullname :</Text>
          <Text style={styles.infoValue}>{user.fullname}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email :</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone :</Text>
          <Text style={styles.infoValue}>{user.phone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
});
export default ProfileScreen;
