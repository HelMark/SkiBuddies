import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ImagePickerComponent from "./ImagePicker"

const EditImages = () => {
  const [profileImages, setProfileImages] = useState([
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde15.jpeg"),
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde14.jpeg"),
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde13.jpeg"),
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde9.jpeg"),
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde7.jpeg"),
    require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde1.jpg"),
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.imageGrid}>
        {profileImages.map((image, index) => (
            <Image source={image}  key={index} style={styles.image} />
        ))}
      </View>
      <ImagePickerComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 10,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 5
  },
});

export default EditImages;

