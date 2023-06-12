import React, { useState } from "react";
import {Text, Pressable, ScrollView, TextInput, StyleSheet, View, TouchableHighlight } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NewPost({ onClose}) {
    //Frontend const
    const [isPressed, setIsPressed] = useState(false);
    const addButtonStyle = isPressed ? [styles.addButton, styles.addButtonPressed] : styles.addButton;

    //Frontend functions
    const handlePressClose = () => {
        onClose();
    };

    const handleButtonPressIn = () => {
        setIsPressed(true)
    };

    const handleButtonPressOut = () => {
        setIsPressed(false);
    };


    //Backend function
    const handlePressPost =() => {
        //logic for saving the post to database
    };
    

    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <View style={styles.header}>
            <Pressable onPress={handlePressClose}>
                <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
            </Pressable>
            <Text style={styles.title}>New Post</Text>
            <View style={{width: 40}}></View>
            </View>
            <View style={{position: "relative"}}>
                <Text style={styles.inputText}>Observations : </Text>
                <TextInput style={styles.input} multiline numberOfLines={10} placeholder= "Add your observations regarding alvalanche danger and snow conditions"/> 
            </View>
            <TouchableHighlight
            onPress={() => {
                handlePressPost();
                handlePressClose();
            }} 
            onPressIn={handleButtonPressIn}
            onPressOut={handleButtonPressOut}
            underlayColor='#0096FF'
            style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Post</Text>
            </TouchableHighlight>
        </ScrollView>
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
        alignItems: "center"
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
        color: "#0096FF"
    },
    input: {
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        top: 30
    },
    inputText: {
        fontSize: 20,
        top: 0,
        left: 0,
        fontWeight: "bold",
        color: "#0096FF",
        marginBottom: 10,
        position: "absolute"
    },
    addButton: {
        height: 50,
        width: 110,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 500
    },
    addButtonPressed: {
        backgroundColor: "#0096FF"
    },
    addButtonText: {
        fontSize:20,
        fontWeight: "bold",
        color: "white",
    }
});