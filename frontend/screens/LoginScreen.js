import React, {useState, useEffect} from  "react"
import {SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";
import LoginField from "../components/LoginField";
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const loadFonts = async () => {
        await Font.loadAsync({
          'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
        });
        setFontLoaded(true)
      };
    
      useEffect(() => {
        loadFonts(); 
      }, []);

    const navigation = useNavigation();
    const [loggedIn, setLoggedIn] = useState(false);
    const [register, setRegister] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
        navigation.navigate('App');
      };
    const handelRegister = () => {
        setRegister(true);
        navigation.navigate("Register")
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal: 25}}>
            <View style={styles.bodyContainer}>
            <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/mountain-png.webp")} style={styles.image} resizeMode="contain"/>
            </View>
            <View style={{alignItems: "center"}}>
                {fontLoaded &&<Text style={styles.LogoText}>SKIBUDDIES</Text>}
                {fontLoaded &&<Text style={styles.loginText}>Login</Text>}
            </View>
            <LoginField label={"Email Adress"} icon={<MaterialIcons name="alternate-email" size={20} color="#D3D3D3" style={{marginRight: 5 }} />} keyboardType="email-address"/>
            <LoginField label={"Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} 
            inputType={"password"} fieldButtonLabel={"Forgot?"} fieldButtonFunction={() => {}}/>

            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                {fontLoaded &&<Text style={styles.loginButtonText}>Login</Text>}
            </TouchableOpacity>

            <View style={{alignItems: "center",  marginBottom: 10}}>
            {fontLoaded &&<Text>Or, login with...</Text>}
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginBottom: 30,}}>
            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/GoogleLogo.png")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/twitterlogo.png")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/FacebookLogo.png")} style={styles.logo}/>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 30}}>
            {fontLoaded &&<Text>New to SkiBuddies? </Text>}
            <TouchableOpacity onPress={handelRegister}>
                {fontLoaded &&<Text style={styles.RegisterText}>Register</Text>}
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}
//Remember to add a function to allow recovery of password if forgot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    bodyContainer: {
        alignItems: "center",
    },
    image: {
        width: 400,
        height: 200,
    },
    loginText: {
        fontFamily: "Roboto-Regular",
        fontSize: 28,
        fontWeight: "bold",
        color: "#0096FF",
        marginBottom: 30
    },
    LogoText: {
        fontFamily: "Roboto-Regular",
        fontSize: 44,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#0096FF"
    },
    textInputContainer: {
        flexDirection: "row", 
        borderBottomColor: "#0096FF", 
        borderWidth: 1, 
        paddingBottom: 8,
        marginBottom: 25
    },
    loginButton: {
        backgroundColor: "#0096FF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 4
    },
    loginButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto-Regular"
    },
    footerText: {
        textAlign: "center",
        color: "#D3D3D3",
        marginBottom: 30,
        fontFamily: "Roboto-Regular",
        fontSize: 12
    },
    logoContainer: {
        borderColor: "#D3D3D3",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    logo: {
        width: 30,
        height: 30
    },
    RegisterText: {
        color: "#0096FF",
        fontWeight: "bold",
        fontFamily: "Roboto-Regular",
    }
})

export default LoginScreen;