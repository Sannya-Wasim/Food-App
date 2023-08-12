import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const SplashScreen = () => {
  return (
    <View className="bg-purple items-center">
      <Ionicons name="fast-food" size={80} color="white" />
      <Text className="text-white mt-2 italic text-4xl">Foodbit</Text>
    </View>
  );
};

export default SplashScreen
