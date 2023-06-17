import React, { useState } from "react";
import {Text, Pressable, KeyboardAvoidingView, TextInput, StyleSheet, View, TouchableHighlight, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NewPost({ onClose, onNewPost}) {
    //Frontend const
    const [isPressed, setIsPressed] = useState(false);
    const addButtonStyle = isPressed ? [styles.addButton, styles.addButtonPressed] : styles.addButton;
    const locations = ["Mannfjellet", "Ruten", "Storhornet", "Hårskallen"];

    const[searchQuery, setSearchQuery] = useState('');
    const[suggestedLocations, setSuggestedLoaction] = useState('')

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

    const handleSearch = (text) =>{
        setSearchQuery(text);
        const result= performSearch(text);
        setSuggestedLoaction(result);
    };
    
    const handleLocationSelect = (location) => {
        console.log("Selected location : ", location);
    }

    const performSearch = (query) => {
        if(!query) {
            return [];
        }

        const lowerCaseQuery = query.toLowerCase();
        const results = locations.filter((locations) => locations.toLowerCase().includes(lowerCaseQuery));
        return results;
    }

    //Backend const
    const availableLocations = [
        'Storhornet',
        'Ruten',
        'Mannfjellet'
    ];


    //Backend function
    const handlePressPost =() => {
        //logic for saving the post to database
    };
    

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.header}>
            <Pressable onPress={handlePressClose}>
              <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
            </Pressable>
            <Text style={styles.title}>New Post</Text>
            <View style={{ width: 40 }}></View>
      
            <TextInput
              style={styles.searchLocation}
              placeholder="Search for a location"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={suggestedLocations}
              style={styles.LocationList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleLocationSelect(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{ position: "relative" }}>
            <Text style={styles.inputText}>Observations:</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={10}
              placeholder="Add your observations regarding avalanche danger and snow conditions"
            />
          </View>
      
          <TouchableHighlight
            onPress={() => {
              handlePressPost();
              handlePressClose();
            }}
            onPressIn={handleButtonPressIn}
            onPressOut={handleButtonPressOut}
            underlayColor="#0096FF"
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Add Post</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      );
      
    
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
        left: 60
    },
    input: {
        width: 300,
        height: 100,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        top: 300,
        left: 30
    },
    inputText: {
        fontSize: 20,
        top: 270,
        left: 30,
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
    },
    searchLocation: {
        borderWidth: 2,
        borderColor: "#D3D3D3",
        padding: 10,
        top: 100,
        right: 180
    },
    LocationList: {
        borderWidth: 2,
        borderColor: "#D3D3D3"
    }
});