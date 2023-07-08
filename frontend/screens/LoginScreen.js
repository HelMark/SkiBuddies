import React, {useState, useEffect} from  "react"
import {SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import loginField from "../components/LoginField";
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const loginScreen = () => {
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
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal: 25}}>
            <View style={styles.bodyContainer}>
            <Image source={require("frontend/Bilder/inLoginPicture.png")} style={styles.image}/>
            </View>
            {fontLoaded &&<Text style={styles.loginText}>Login</Text>}
            <loginField label={"Email Adress"} icon={<MaterialIcons name="alternate-email" size={20} color="#D3D3D3" style={{marginRight: 5 }} />} keyboardType="email-address"/>
            <loginField label={"Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} 
            inputType={"password"} fieldButtonLabel={"Forgot?"} fieldButtonFunction={() => {}}/>

            <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
                {fontLoaded &&<Text style={styles.loginButtonText}>Login</Text>}
            </TouchableOpacity>
            {fontLoaded &&<Text style={styles}>Or, login with...</Text>}

            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("frontend/Bilder/GoogleLogo.png")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("frontend/Bilder/TwitterLogo.jpeg")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("frontend/Bilder/FacebookLogo.png")} style={styles.logo}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 30}}>
            {fontLoaded &&<Text>New to SkiBuddies? </Text>}
            <TouchableOpacity onPress={() => {}}>
                {fontLoaded &&<Text>Register</Text>}
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
        width: 300,
        height: 300,
        transform: [{rotate: "-5deg"}]
    },
    loginText: {
        fontFamily: "Roboto-Regular",
        fontSize: 28,
        fontWeight: "bold",
        color: "#0096FF",
        marginBottom: 30 
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
        }
    },
    loginButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto-Regular"
    },
    footerText: {
        textAlign:"center",
        color: "#D3D3D3",
        marginBottom: 30,
        fontFamily: "Roboto-Regular"
    },
    logoContainer: {
        borderColor: "#D3D3D3",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    logo: {
        width: 24,
        height: 24
    },
    RegisterText: {
        color: "#0096FF",
        fontWeight: "Bold",
        fontFamily: "Roboto-Regular"
    }
})

export default loginScreen;