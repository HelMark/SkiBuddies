import React, { useState } from "react";
import { View, StyleSheet, Alert, Image, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ImagePickerComponent from "./ImagePicker"

const EditImages = () => {
  const [profileImages, setProfileImages] = useState([
    null, null, null, null, null, null, 
  ]);

  const handleImageSelect = (selectedImageUri) => {
    const updateImages = [...profileImages];
    const emptySlotIndex = updateImages.findIndex((image) => image === null);

    if(emptySlotIndex !== -1) {
      updateImages[emptySlotIndex] = selectedImageUri;
      setProfileImages(updateImages);
    } else {
      Alert.alert("Grid is Full", "You cannot add more Images")
    }
  }

  const removeImage = (index) => {
    const updateImages = [...profileImages];
    updateImages[index] = null;
    setProfileImages(updateImages)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageGrid}>
        {profileImages.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            {image ? (
              <>
              <Image source={{ uri: image }} style={styles.image} />
              <Pressable style={styles.removeIcon}
              onPress={() => removeImage(index)}>
                <MaterialIcons name="highlight-remove" size={26} style={styles.icon} />
              </Pressable>
              </>
            ) : (
              <View style={styles.placeholder} />
              )}
          </View>
        ))}
      </View>
      <ImagePickerComponent onImageSelect={handleImageSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "32%",
    aspectRatio: 0.75,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10
  },
  placeholder: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    borderStyle: "dashed"
  }, 
  removeIcon: {
    position: "absolute",
    top: 2,
    right: 2,
    zIndex: 1
  },
  icon: {
    color: "#0096FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
  }
});

export default EditImages;

