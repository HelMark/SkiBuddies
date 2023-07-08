import React, {useState, useEffect} from  "react"
import {SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native"
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LoginField from "../components/LoginField";
import DatePicker from "react-native-date-picker";
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
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
    const  [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState("Date of Birth")

    const navigation = useNavigation();
    const [registered, setRegistered] = useState(false);

    const handleRegister = () => {
        setRegistered(true);
        navigation.navigate('Login');
      };
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 25}}>
            <View style={styles.bodyContainer}>
            <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/RegisterPicture.png")} style={styles.image}/>
            </View>

            {fontLoaded &&<Text style={styles.loginText}>Register</Text>}
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/GoogleLogo.png")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/TwitterLogo.jpeg")} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.logoContainer}>
                <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/FacebookLogo.png")} style={styles.logo}/>
            </TouchableOpacity>
            </View>
            {fontLoaded &&<Text style={styles}>Or, Register with Email...</Text>}

            <LoginField label={"Full Name"} icon={<Ionicons name="person-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />}/>
            <LoginField label={"Email Adress"} icon={<MaterialIcons name="alternate-email" size={20} color="#D3D3D3" style={{marginRight: 5 }} />} keyboardType="email-address"/>
            <LoginField label={"Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} inputType={"password"}/>
            <LoginField label={"Confirm Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} inputType={"password"}/>

            <View style={styles.textInputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={styles.dateOfBirthText}>{dobLabel}</Text>
                </TouchableOpacity>
            </View>
            <DatePicker 
            modal
            open={open}
            date={date}
            mode={"date"}
            maximumDate={new Date("2022-01-01")}
            minimumDate={new Date("1900-01-01")}
            onConfirm ={(date) => {
                setOpen(false)
                setImmediate(date)
                setDobLabel(date.toDateString())
                }}
                onCancel={() => {
                    setOpen(false)}}
            />
            <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
                {fontLoaded &&<Text style={styles.loginButtonText}>Register</Text>}
            </TouchableOpacity>

            <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 30}}>
            {fontLoaded &&<Text>Already registered? </Text>}
            <TouchableOpacity onPress={handleRegister}>
                {fontLoaded &&<Text>Login</Text>}
            </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
//Remember to add functions for different Buttons

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
    },
    dateOfBirthText: {
        color: "#D3D3D3",
        fontFamily: "Roboto-Regular",
        marginLeft: 5,
        marginTop: 5,
    }
})

export default RegisterScreen;