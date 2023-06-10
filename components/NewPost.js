import React from "react";
import {View, Text, Button, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NewPost({ onClose}) {

    const handlePressClose = () => {
        onClose();
    };

    return(
        <View>
            <Text style={{top:300, alignSelf:"center", fontSize:20}}>New post to be added</Text>
            <TouchableOpacity onPress={handlePressClose}>
            <Ionicons name="md-arrow-back-sharp" size={50} color="black" style={{left: 10, top:30}}/>
            </TouchableOpacity>
        </View>
    )
}

