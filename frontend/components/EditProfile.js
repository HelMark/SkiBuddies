import React, { useState, useEffect } from "react";
import {View, StyleSheet, Pressable, Text, TextInput, Alert } from "react-native";
import { Switch } from "react-native-switch";
import { Ionicons } from '@expo/vector-icons';

export default function EditProfile({onClose}){
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
            <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
        </Pressable>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={{width: 40}}></View>
        </View>
            <View style={styles.content}> 
                <Text style={styles.label}>First Name:</Text>
                <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={handleFirstNameChange}/>
                <Text style={styles.label}>Surname:</Text>
                <TextInput
                style={styles.input}
                value={surname}
                onChangeText={handleSurnameChange}/>
                <Text style={styles.label}>Email: </Text>
                <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange} />
                <Text style={styles.label}>Hometown:</Text>
                <TextInput
                style={styles.input}
                value={hometown}
                onChangeText={handleHometownChange}/>
                <Text style={styles.label}>Hobbies:</Text>
                <TextInput
                style={styles.input}
                value={hobbies}
                onChangeText={handleHobbiesChange}/>
                <Text style={styles.label}>New Password;</Text>
                <TextInput 
                style={styles.input}
                value={password}
                onChangeText={handlePasswordChange}/>
                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput 
                style={styles.input}
                value={passwordConfirmation}
                onChangeText={handlePasswordConfirmationChange}
                secureTextEntry/>
                <View style={styles.switchContainer}>
                <Text style={styles.label}> Profile Privacy:</Text>
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
                <Text style={styles.label}>Show My Profile in Buddies: </Text>
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
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
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
    header :{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5
    },
    backButton: {
        width:40,
        marginTop: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
        alignSelf: "center",
        marginTop: 20,
        color: "#0096FF", 
        },
    content: {
        flex: 1
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#0096FF"
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    saveButton: {
        backgroundColor: "#0096FF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        bottom: 20
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    SwitchComponent: {
        flexDirection: "row",
        alignItems: "center"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginRight: 10,
        marginTop: 10
    },
    switch: {
        circleSize: 24,
        barHeight: 30,
        circleBorderWidth: 0,
        backgroundActive: "#4CD964",
        backgroundInactive: "#DCDCDC",
        circleActiveColor: "white",
        circleInActiveColor: "white",
        changeValueImmediately: true
    }
})