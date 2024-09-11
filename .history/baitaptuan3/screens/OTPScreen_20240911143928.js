import AsyncStorage from "@react-native-async-storage/async-storage";
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

export default function OTPScreen({ route, navigation }) {
  const { otp_code, action, username, password, email, fullname, phone } =
    route.params;
  const { user, setUser } = useUser();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleActionWithOTP = async () => {
    if (otp !== otp_code) {
      Alert.alert("Error", "OTP do not match");
      return;
    }
    console.log("otp : ", otp);
    console.log("otp_code : ", otp_code);
    console.log("action: ", action);

    if (action === "Create_Account") {
      console.log(123);
      try {
        const response = await fetch("http://192.168.56.1:3000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            fullname,
            email,
            phone,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Nếu đăng ký thành công
          Alert.alert("Success", data.message, [
            { text: "OK", onPress: () => navigation.navigate("Login") },
          ]);
        } else {
          // Nếu đăng ký không thành công
          const errorMessage =
            typeof data.message === "string"
              ? data.message
              : JSON.stringify(data.message);
          Alert.alert("Error", errorMessage || "Registration failed");
        }
      } catch (error) {
        Alert.alert("Error", error.message || "Something went wrong");
      }
    } else if (action === "EditAccount") {
      const accessToken = await AsyncStorage.getItem("@accessToken");
      try {
        const response = await fetch("http://192.168.56.1:3000/user/", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            fullname,
            email,
            phone,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Nếu đăng ký thành công
          setUser(data.updatedUser);
          Alert.alert("Success", data.message, [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("EditProfile", { user: data.user }),
            },
          ]);
        } else {
          // Nếu đăng ký không thành công
          const errorMessage =
            typeof data.message === "string"
              ? data.message
              : JSON.stringify(data.message);
          Alert.alert("Error", errorMessage || "Edit account failed");
        }
      } catch (error) {
        Alert.alert("Error", error.message || "Something went wrong");
      }
    }
  };

  const handleOTPSubmit = async () => {
    if (otp.length !== 6) {
      Alert.alert("Error", "OTP must be 6 digits");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("http://192.168.56.1:3000/user/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        Alert.alert("Success", "OTP verified successfully", [
          {
            text: "OK",
            onPress: () => navigation.navigate("HomeScreen"),
          },
        ]);
      } else {
        Alert.alert("Error", data.message || "Failed to verify OTP");
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", error.message || "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 6-digit OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleActionWithOTP}>
        <Text style={styles.buttonText}>
          {isLoading ? "Verifying..." : "Submit OTP"}
        </Text>
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
    fontSize: 18,
    textAlign: "center",
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
    fontSize: 18,
  },
  backToLoginText: {
    marginTop: 20,
    color: "#007bff",
    textAlign: "center",
    fontSize: 16,
  },
});
