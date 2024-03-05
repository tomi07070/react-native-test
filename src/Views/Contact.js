import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleFormSubmit = () => {
        if (!fullName) {
            Alert.alert('send all requested fields')
        } else {
            Alert.alert('Form Submitted', `Full Name: ${fullName} Email: ${email}`);
        }
    };

    return (
        <>
            <View style={tw`p-4 mt-[100px]`}>
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor='white'
                    style={tw`bg-gray-600 w-full p-2 mt-[30px] rounded text-white`}
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='white'
                    style={tw`bg-gray-600 w-full p-2  mt-[30px] rounded text-white`}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='white'
                    secureTextEntry  
                    style={tw`bg-gray-600 w-full p-2   mb-[40px] mt-[30px] rounded text-white`}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Submit" onPress={handleFormSubmit} />
            </View>
        </>
    );
}
