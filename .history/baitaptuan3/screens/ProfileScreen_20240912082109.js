import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
      <View style={styles.header}></View>
      {/* <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      /> */}
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Opcion 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Opcion 2</Text>
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

export default ProfileScreen;
