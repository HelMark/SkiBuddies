import React, { useState, useEffect } from "react";
import {View, StyleSheet, Pressable, Text, TextInput, Alert, ScrollView } from "react-native";
import { Switch } from "react-native-switch";
import { Ionicons,FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import EditImages from "./EditImages";
import LoginField from "./LoginField";
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import HobbiePicker from "./HobbiePicker";

export default function EditProfile({onClose}){
    const [fontLoaded, setFontLoaded] = useState(false);

    const[firstName, setFirstName] = useState("");
    const[surname, setSurname] = useState("");
    const[email, setEmail] = useState("");
    const[hobbies, setHobbies] = useState("");
    const[hometown, setHometown] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConfirmation, setPasswordConfirmation] = useState("");

    const[isPrivate, setIsPrivate] = useState(false);
    const[showBuddies, setShowBuddies] = useState(false);

    const[isModified, setIsModified] = useState(false);

    const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true)
  };

  useEffect(() => {
    loadFonts(); 
  }, []);


    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        //Fecth user data with restAPI to DB
        const userData = {firstName: "john", 
        surname: "Doe", 
        email: "johndoe@example.com",
        Hometown: "Trondheim", 
        Hobbies: "Skiing, Climbing",
        PrivateProfile: true,
        showBuddies: true
        }; //Dummie value
        setFirstName(userData.firstName);
        setIsPrivate(userData.PrivateProfile);
        setShowBuddies(userData.showBuddies);
        setSurname(userData.surname);
        setHometown(userData.Hometown)
        setHobbies(userData.Hobbies)
        setEmail(userData.email);
    };

    const handlePressClose = () => {
        if(isModified) {
            Alert.alert(
                "Unsaved Changes",
                "Are you sure you want to leave? Your changes won't be saved",
                [
                    {
                        text: "Stay",
                        style: "cancel"
                    },
                    {
                        text: "Leave",
                        onPress: onClose,
                    }
                ]
            );
        } else {
            onClose();
        }
    };

    const handleSaveChanges = () => {
        if(password !== passwordConfirmation) {
            Alert.alert("Password Mismatch", "Please make sure the passwords match")
            return;
        }
         //Send API request to update user information
        setIsModified(false);
        Alert.alert("Changes Saved", "Your changes have been saved successfully");
        onClose();
    };

    const handleFirstNameChange = (text) => {
        setFirstName(text);
        setIsModified(true);
    };

    const handleSurnameChange = (text) => {
        setSurname(text);
        setIsModified(true)
    };

    const handleEmailChange =(text) => {
        setEmail(text);
        setIsModified(true)
    };

    const handleHometownChange = (text) => {
        setHometown(text);
        setIsModified(true)
    }

    const handleHobbiesChange = (text) => {
        setHobbies(text);
        setIsModified(true)
    }

    const toggleProfilePrivacy = () => {
        setIsModified(true)
        setIsPrivate(!isPrivate)
    };

    const toggleBuddiesActive = () => {
        setIsModified(true)
        setShowBuddies(!showBuddies)
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsModified(true);
    };
    const handlePasswordConfirmationChange = (text) => {
        setPasswordConfirmation(text);
        setIsModified(true)
    }

    const [showModal, setShowModal] = useState(false);
    const [editImages, setEditImages] = useState(false);
    const handleCloseModal = () => {
        setEditImages(false);
        setShowModal(false);
    }

    const navigation = useNavigation();
    const handleLogOut = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
            <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
        </Pressable>
        {fontLoaded &&<Text style={styles.title}>Edit Profile</Text>}
        <View style={{width: 40}}></View>
        </View>
            <ScrollView style={styles.content}> 
                <LoginField label={"First Name"} icon={<Ionicons name="person-outline" size={20} color="#D3D3D3" style={{marginRight: 5}}/>} onChangeText={handleFirstNameChange} value={firstName}/>
                <LoginField label={"Last Name"} icon={<Ionicons name="person-outline" size={20} color="#D3D3D3" style={{marginRight: 5}}/>} onChangeText={handleSurnameChange} value={surname}/>
                <LoginField label={"Email Adress"} icon={<MaterialIcons name="alternate-email" size={20} color="#D3D3D3" style={{marginRight: 5 }} />} keyboardType="email-address" onChangeText={handleEmailChange} value={email}/>
                <LoginField label={"Hometown"} icon={<Ionicons name="home" size={20} color="#D3D3D3" style={{marginRight: 5}} />} onChangeText={handleHometownChange} value={hometown}/>
                <HobbiePicker  onChangeText={handleHobbiesChange} value={hobbies}/>
                <LoginField  label={"Password"} inputType={"password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}}/>} onChangeText={handlePasswordChange} value={password}/>
                <LoginField label={"Confirm Password"} inputType={"password"} icon={<Ionicons name="ios-lock-closed-outline" size={20} color="#D3D3D3" style={{marginRight: 5}}/>} onChangeText={handlePasswordConfirmationChange} value={passwordConfirmation}/>
                {fontLoaded &&<Text style={styles.ProfileImagesText}>Profile Images:</Text>}
                <EditImages/>
                <View style={styles.switchContainer}>
                {fontLoaded &&<Text style={styles.label}> Private Profile:</Text>}
                <Switch
                value={isPrivate}
                onValueChange={toggleProfilePrivacy}
                {...styles.switch}
                renderInsideCircle={() => (
                    <Text style={{fontWeight: "bold", color: isPrivate ? "white" : "black" }}>
                        {isPrivate ? "" : ""}
                    </Text>
                )}
                />
                </View>
                <View style={styles.switchContainer}>
                {fontLoaded &&<Text style={styles.label}>Show My Profile in Buddies: </Text>}
                <Switch
                value={showBuddies}
                onValueChange={toggleBuddiesActive}
                {...styles.switch}
                renderInsideCircle={() => (
                    <Text style={{fontWeight: "bold", color: showBuddies ? "white": "black"}}>
                        {showBuddies ? "": ""}
                    </Text>
                )}
                />
                </View>
                <View style={styles.logOutContainer}>
                    <Pressable style={styles.logOutButton} onPress={handleLogOut}>
                        {fontLoaded &&<Text style={styles.saveButtonText}>Log out</Text>}
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
                    {fontLoaded &&<Text style={styles.saveButtonText}>Save Changes</Text>}
                </Pressable>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    modalContainer: {
        flex: 1,
      },
    header :{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5
    },
    backButton: {
        width:40,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
        color: "#0096FF", 
        fontFamily: "Roboto-Regular"
        },
    content: {
        flex: 1
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#0096FF",
        fontFamily: "Roboto-Regular"
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#D3D3D3"
    },
    saveButton: {
        backgroundColor: "#0096FF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto-Regular"
    },
    SwitchComponent: {
        flexDirection: "row",
        alignItems: "center",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginRight: 10,
    },
    switch: {
        circleSize: 24,
        barHeight: 30,
        circleBorderWidth: 0,
        backgroundActive: "#4CD964",
        backgroundInactive: "#DCDCDC",
        circleActiveColor: "white",
        circleInActiveColor: "white",
        changeValueImmediately: true,
    },
    ProfileImagesText:{
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#0096FF", 
        fontFamily: "Roboto-Regular"
    },
    logOutContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10
    },
    logOutButton: {
        backgroundColor: "#0096FF",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
    }
})