import React from "react";
import {View, StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function EditProfile({onClose}){

    const handlePressClose = () => {
        onClose();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
            <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
        </Pressable>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={{width: 40}}></View>
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
        color: "#0096FF", 
        }

})