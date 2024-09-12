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

export default ProfileScreen;
