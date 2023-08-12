import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const SignUp = () => {
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email')
    const [password, setPassword] = useState('Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password')
  return (
    <View className="mt-40 items-center justify-center">
      <Text className="text-4xl text-purple font-medium">Register</Text>
      <Text className="text-lg text-purple">Create your new account</Text>
      <View className="mt-20">
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={username}/>
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={email}/>
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={password}/>
        <TextInput className="bg-gray-200 w-80 h-12 p-2 rounded-md m-2" value={confirmPassword}/>
      </View>
      <View>
        <TouchableOpacity className="m-4 mt-14 w-80 bg-purple  p-2 rounded-md items-center">
        <Text className="text-white font-semibold text-md p-2">Sign Up</Text>
        </TouchableOpacity>
        <Text className="text-center">Already have an account? <Text className="text-purple font-bold">Login</Text></Text>
      </View>
    </View>
  )
}

export default SignUp