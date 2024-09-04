import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.56.1:3000/user/forgotpassword",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Password reset link sent to your email", [
          {
            text: "OK",
            onPress: async () => {
              //   const res = await fetch(
              //     "http://192.168.56.1:3000/user/forgotpassword",
              //     {
              //       method: "GET",
              //       headers: {
              //         "Content-Type": "application/json",
              //       },
              //       body: JSON.stringify({ email }),
              //     }
              //   );
              navigation.navigate("ResetPassword");
            },
          },
        ]);
      } else {
        Alert.alert("Error", data.message || "Failed to send reset link");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  backToLoginText: {
    marginTop: 20,
    color: "#007bff",
    textAlign: "center",
  },
});
