import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
const BookDetail = ({ route, navigation }) => {
  // Lấy dữ liệu sản phẩm từ navigation props
  const { product } = route.params;
  console.log("product : ---------- ", product);
  return (
    <View className="flex-1" style={{ backgroundColor: "#000" }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5 mt-10">
          <TouchableOpacity
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            className="border border-gray-50 rounded-xl"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="30" color="#000"></ChevronLeftIcon>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-5 pb-10">
          <Image
            source={{ uri: product.imageUrl }}
            style={{ width: 290, height: 290 }}
          ></Image>
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    padding: 10,
  },

  Book: {
    margin: 20,
    flexDirection: "row",
  },

  EEI: {
    marginLeft: 20,
    fontSize: 20,
  },

  btnRegister: {
    width: "90%",
    height: 50,
    backgroundColor: "#005CA4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 100,
  },
});

export default BookDetail;
