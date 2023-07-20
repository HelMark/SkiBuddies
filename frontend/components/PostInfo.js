import React, { forwardRef, useState, useEffect } from "react";
import {View, TextInput, Text, StyleSheet, Dimensions} from "react-native";
import * as Font from 'expo-font';

const screenHeight = Dimensions.get('window').height;

const PostInfo = forwardRef(({label, placeholder, onSubmitEditing}, ref) => {
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

    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputLabel}>
                {fontLoaded &&<Text style={styles.inputText}>{label}</Text>}
            </View>
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            multiline={true}
            numberOfLines={3}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={true}
            ref={ref}
            />
        </View>
    );
})
export default PostInfo;

const styles = StyleSheet.create({
    inputContainer: {
        top: screenHeight* -0.001,
        marginBottom: 5,
        alignSelf: "center"
      },
      inputLabel: {
        fontSize: 16,
        fontWeight: "bold",
        borderBottomColor: "#0096FF",
        borderBottomWidth: 3
      },
      input: {
        fontSize: 16,
        paddingVertical: 4,
        borderColor: "#D3D3D3",
        borderWidth: 2,
        height: 60,
        width: 300,
        marginTop: 5,
        borderRadius: 5,
      },
      inputText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0096FF",
        fontFamily: "Roboto-Regular"
      },
})