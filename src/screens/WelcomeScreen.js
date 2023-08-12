import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <View>
      <Image
        className="w-100 h-96"
        source={{
          uri: "https://img.freepik.com/free-photo/pakistani-dish-arrangement-high-angle_23-2148825115.jpg?w=1060&t=st=1691833098~exp=1691833698~hmac=cc99aab273118e44d6227c24a85edafdf38a0172cd68bb9d7e0b54f766bd5039",
        }}
      />
      <View className="bg-white items-center">
        <View className='m-4 mt-8 items-center'>
            <Text className="text-4xl text-purple font-medium">Welcome</Text>
            <Text>Lorem Ipsum</Text>
        </View>
        <View className="mt-20 mx-20">
            <TouchableOpacity className="m-4 w-80 bg-purple  p-2 rounded-md items-center">
                <Text className="text-white font-semibold text-lg">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className="m-4 w-80 bg-purple  p-2 rounded-md items-center">
                <Text className="text-white font-semibold text-lg">Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
