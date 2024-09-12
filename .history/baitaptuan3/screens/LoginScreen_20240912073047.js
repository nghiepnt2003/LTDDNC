import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useUser } from "../src/hook/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }

    try {
      const response = await fetch("http://192.168.56.1:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, handle accessToken
        console.log(data.userData); // You can use accessToken here
        setUser(data.userData);
        await AsyncStorage.setItem("@accessToken", data.accessToken);
        Alert.alert("Success", "Login successful", [
          { text: "OK", onPress: () => navigation.navigate("Home") }, // Redirect to Home screen or any other screen
        ]);
      } else {
        // Handle errors (e.g., invalid credentials)
        Alert.alert("Error", data.message || "Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      Alert.alert("Error", error.message || "Something went wrong");
    }
  };

  return (
    <View className="flex-1 justify-center px-4">
      <Text className="text-3xl font-semibold text-center mb-6">Login</Text>

      <TextInput
        className="border border-gray-300 p-3 rounded-md mb-4"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        className="border border-gray-300 p-3 rounded-md mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-blue-600 py-3 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-medium">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text className="text-blue-600 text-center mt-4">
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text className="text-blue-600 text-center mt-2">Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}
