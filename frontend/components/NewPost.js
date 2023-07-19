import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import DestinationSearchBar from "./DestinationSearch";
import PictureSwiper from "./PictureSwiper";
import PostInfo from "./PostInfo";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;

export default function NewPost({ onClose }) {
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

  const handlePressClose = () => {
    onClose();
  };

  const handleEnterPress =() =>{
    textInputRef.blur();
  }
  let textInputRef;

  const handleImageSelect = (selectedImage) => {
    //Add code here
    console.log("Image uploaded")
  }

  const handlePressPost = () => {
    // logic for saving the post to the database
    handlePressClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
          <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton} />
        </Pressable>
        {fontLoaded &&<Text style={styles.title}>New Post</Text>}
        <View style={{ width: 40 }}></View>
      </View>
      <View style={styles.bodyContainer}>
        <DestinationSearchBar />
        <PictureSwiper />
        <View style={styles.postInfoContainer}>
          <PostInfo 
            label="Avalanche Danger:" 
            placeholder="Enter Avalanche Danger..."
            onSubmitEditing={handleEnterPress}
            ref={(ref) => (textInputRef =ref)}
          />
          <PostInfo 
            label="Snow Conditions:" 
            placeholder="Enter Snow Conditions..."
            onSubmitEditing={handleEnterPress}
            ref={(ref) => (textInputRef =ref)}
          />
          <PostInfo 
            label="Route:" 
            placeholder="Enter Route..."
            onSubmitEditing={handleEnterPress}
            ref={(ref) => (textInputRef =ref)}
          />
        </View>
      </View>
      <Pressable style={styles.addButton} onPress={handlePressPost}>
        {fontLoaded &&<Text style={styles.addButtonText}>Add Post</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1
  },
  backButton: {
    width: 40,
    marginTop: 20,
    left: -40,
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
  addButton: {
    backgroundColor: "#0096FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Regular"
  },
  postInfoContainer: {
    marginBottom: 20,
  },
  
});
