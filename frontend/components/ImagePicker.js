import React, { useState } from 'react';
import { Pressable, Image, View, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent({onImageSelect}) {

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      setImage(result.assets[0].uri);
      onImageSelect(selectedImageUri);
      
    }
  };

  return (
    <View >
      <Pressable onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Add a image from your library</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0096FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    top: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
})

