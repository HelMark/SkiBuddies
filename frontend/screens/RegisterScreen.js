import React, {useState, useEffect} from  "react"
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform} from "react-native"
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LoginField from "../components/LoginField";
import HobbiePicker from "../components/HobbiePicker";
import DateTimePicker from "@react-native-community/datetimepicker"
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

    const handleDateChange = (_, selectedDate) => {
        setOpen(false);
        if (selectedDate) {
          setDate(selectedDate);
          setDobLabel(selectedDate.toDateString());
        }
      };

      const showDatePicker = () => {
        if (Platform.OS === 'ios') {
          setOpen(true);
        }
      };
    
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 25}}>
            <View style={styles.bodyContainer}>
            <Image source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/mountain-png.webp")} style={styles.image} resizeMode="contain"/>
            </View>
            <View style={{alignItems: "center"}}>
            {fontLoaded &&<Text style={styles.loginText}>Register with: </Text>}
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginBottom: 20}}>
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

            <View style={{alignItems: "center", paddingBottom: 10}}>
            {fontLoaded &&<Text style={styles.RegisterText}>Or, Register with Email...</Text>}
            </View>

            <LoginField label={"First Name"} icon={<Ionicons name="person-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />}/>
            <LoginField label={"Last Name"} icon={<Ionicons name="person-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />}/>
            <LoginField label={"Email Adress"} icon={<MaterialIcons name="alternate-email" size={20} color="#D3D3D3" style={{marginRight: 5 }} />} keyboardType="email-address"/>
            <LoginField label={"Hometown"} icon={<Ionicons name="home" size={20} color="#D3D3D3" style={{marginRight: 5}} />}/>
            <LoginField label={"Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} inputType={"password"}/>
            <LoginField label={"Confirm Password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />} inputType={"password"}/>
            <HobbiePicker />
            <View style={styles.textInputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#D3D3D3" style={{marginRight: 5}} />
                <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.dateOfBirthText}>{dobLabel}</Text>
                </TouchableOpacity>

                {open && (
        <DateTimePicker
          value={date}
          mode="date"
          maximumDate={new Date()}
          minimumDate={new Date("1900-01-01")}
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
            </View>

            <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
                {fontLoaded &&<Text style={styles.loginButtonText}>Register</Text>}
            </TouchableOpacity>

            <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 30}}>
            {fontLoaded &&<Text>Already registered? </Text>}
            <TouchableOpacity onPress={handleRegister}>
                {fontLoaded &&<Text style={styles.SwitchBackText}>Login</Text>}
            </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
//Remember to add functions for different Buttons 
//DatePicker is not optimal. Needs to me looked at

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
        marginBottom: 20 
    },
    textInputContainer: {
        flexDirection: "row", 
        borderBottomColor: "#0096FF", 
        borderBottomWidth: 1, 
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
        textAlign:"center",
        color: "#D3D3D3",
        marginBottom: 30,
        fontFamily: "Roboto-Regular"
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
        fontSize: 18
    },
    dateOfBirthText: {
        color: "#D3D3D3",
        fontFamily: "Roboto-Regular",
        marginLeft: 5,
        marginTop: 5,
    },
    SwitchBackText: {
        color: "#0096FF",
        fontWeight: "bold",
        fontFamily: "Roboto-Regular"
    }
})

export default RegisterScreen;