import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');
  return (
    <View className="mt-40 items-center justify-center">
      <Text className="text-4xl text-purple font-medium">Welcome Back</Text>
      <Text className="text-lg text-purple">Log in to your account</Text>
      <View className="mt-20">
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={username}/>
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={password}/>
      </View>
      <Text className="text-purple font-bold -mr-40">Forgot Password?</Text>
      <View>
        <TouchableOpacity className="m-4 mt-14 w-80 bg-purple  p-2 rounded-md items-center">
        <Text className="text-white font-semibold text-md p-2">Login</Text>
        </TouchableOpacity>
        <Text className="text-center">Don't have an account? <Text className="text-purple font-bold">Sign Up</Text></Text>
      </View>
    </View>
  )
}

export default Login