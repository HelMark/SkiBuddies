import React, { useState, useEffect } from 'react';
import { Pressable, View, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Font from 'expo-font';

export default function ImagePickerComponent({onImageSelect}) {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true)
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      onImageSelect(result.uri);
    }
  };

  useEffect(() => {
    loadFonts(); 
  }, []);

  return (
    <View >
      <Pressable onPress={pickImage} style={styles.button}>
       {fontLoaded && <Text style={styles.buttonText}>Add a image from your library</Text>}
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
    top: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Regular"
  },
})

