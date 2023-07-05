import React, {useState, useEffect} from "react";
import { StyleSheet, View, Pressable, Text, TextInput, Alert, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SearchBar from "../components/SearchBar"
import * as Font from 'expo-font';

export default function NewGroupComponent({onClose}) {
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

    const [person, setPerson] = useState([ //Dummie values
        {id: 1, name: "Person 1"},
        {id: 2, name: "Person 2"},
        {id: 3, name: "Person 3"},
    ]);

    const[isFocused, setIsFocused] = useState(false);
    const[isModified, setIsModified] = useState(false);


    const handleFocus= () => {
        setIsFocused(true);
    }

    //Need to add functionality to check if the added members is empty, 
    //hadded selected members to the list and a remove button on each selected member

    const handleBlur = () => {
        setIsFocused(false);
    }
    const borderColor = isFocused ? "#0096FF" : "#D3D3D3";

    const handleGroupNameChange = () => {
        setIsModified(true)
    };

    const handlePressClose= () => {
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
    
    const handleCreateNewGroup = () => {
        //send the new group to the database 
        setIsModified(false);
        Alert.alert("New group added", "A new group with your selected Buddies have been added");
        onClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
            <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
        </Pressable>
        {fontLoaded &&<Text style={styles.title}>New Group</Text>}
        <View style={{width: 40}}></View>
        </View>
        <SearchBar placeholder={"Search for a profile to add to the group..."}/>
        {fontLoaded &&<Text style={styles.GroupText}>Group Name:</Text>}
        <TextInput
        style={[styles.GropNameInput, {borderColor}]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Give the new group a name..."
        onChangeText={handleGroupNameChange}/>
        {fontLoaded &&<Text style={styles.GroupText}>Members: </Text>}
        <ScrollView style={styles.ScrollContainer}>
        {person.map((person) => (
            <View style={styles.ContainerItem} key={person.id}>
                {fontLoaded &&<Text>{person.name}</Text>}
            </View>
        ))}
        </ScrollView>
        <View style={styles.footer}>
                <Pressable style={styles.saveButton} onPress={handleCreateNewGroup}>
                    {fontLoaded &&<Text style={styles.saveButtonText}>Create new Group</Text>}
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
        alignItems: "center"
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
    GropNameInput: {
        height: 40,
        borderColor: "#D3D3D3",
        borderWidth: 3,
        borderRadius: 10,
    },
    GroupText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#0096FF",
        fontFamily: "Roboto-Regular"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    saveButton: {
        backgroundColor: "#0096FF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        bottom: 20,
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
    ScrollContainer: {
        flex:1,
        borderColor: "#D3D3D3",
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    ContainerItem: {
        paddingVertical:20,
        borderBottomWidth: 2,
        borderBottomColor: "#D3D3D3",
    },
})
