import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import DestinationSearchBar from "./DestinationSearch";
import ImagePickerComponent from "./ImagePicker";

export default function NewPost({ onClose }) {

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
        <Text style={styles.title}>New Post</Text>
        <View style={{ width: 40 }}></View>
      </View>
      <View style={styles.bodyContainer}>
        <DestinationSearchBar />
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Avalanche danger:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter avalanche danger"
          multiline={true}
          numberOfLines={3}
          onSubmitEditing={handleEnterPress}
          blurOnSubmit={true}
          ref={(ref) => (textInputRef = ref)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Snow Conditions:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter snow conditions"
          multiline={true}
          numberOfLines={3}
          onSubmitEditing={handleEnterPress}
          blurOnSubmit={true}
          ref={(ref) => (textInputRef = ref)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Route:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter route"
          multiline={true}
          numberOfLines={3}
          onSubmitEditing={handleEnterPress}
          blurOnSubmit={true}
          ref={(ref) => (textInputRef = ref)}
        />
        <ImagePickerComponent onImageSelect={handleImageSelect}/>
      </View>
      <Pressable style={styles.addButton} onPress={handlePressPost}>
        <Text style={styles.addButtonText}>Add Post</Text>
      </Pressable>
      </View>
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
  bodyContainer: {
    flex: 1
  },
  backButton: {
    width: 40,
    marginTop: 20,
    left: -40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 20,
    color: "#0096FF",
  },
  addButton: {
    backgroundColor: "#0096FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 10,
    bottom: 200
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomColor: "#0096FF",
    borderBottomWidth: 3,
  },
  input: {
    fontSize: 16,
    paddingVertical: 4,
    borderColor: "#D3D3D3",
    borderWidth: 2,
    height: 60,
    width: 300,
    marginTop: 5
  },
  inputText: {
    fontSize: 20,
    letterSpacing: 1.5
  }
});
