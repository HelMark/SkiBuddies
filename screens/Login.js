import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function loginScreen({ navigation}) {
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Add code to validate input from user
        const isAuthenticated = true;

        if(isAuthenticated) {
            //Save userlogin here to (sessionID) so the system remembers the user

            navigation.nagate('Home');
        } else {
            console.log('login failed');
        }
    };
    return (
        <View style={StyleSheet.container}>
            <Text style= {StyleSheet.title}>Login</Text>
            <TextInput
            style={StyleSheet.input}
            placeholder = "Username"
            value={username}
            onChangeText ={setUsername}
            />
            <TextInput
            style={styles.input}
            placeholder = "Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
            <Button title="login" onPress={handleLogin} />
        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});