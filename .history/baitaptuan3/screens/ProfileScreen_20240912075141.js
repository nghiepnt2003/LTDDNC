import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../src/hook/userContext";

const ProfileScreen = ({ route }) => {
  const { user, setUser } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>{username}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.info}>{fullname}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#666",
  },
});

export default ProfileScreen;
