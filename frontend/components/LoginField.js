import React, {useState, useEffect} from "react";
import {View, Text,TouchableOpacity, TextInput, StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

 export default function LoginField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) {
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
        <View style={styles.textInputContainer}>
            {icon}
            {inputType =="password" ? (
            <TextInput placeholder={label} style={{flex: 1}} secureTextEntry={true} keyboardType={keyboardType} />
            ):(
            <TextInput placeholder={label} style={{flex: 1}} keyboardType={keyboardType}/>
            ) }
            <TouchableOpacity onPress={fieldButtonFunction}>
                {fontLoaded &&<Text style={{color: "#0096FF", fontWeight: "bold"}}>{fieldButtonLabel}</Text>}
            </TouchableOpacity>
        </View>
    )
 }
 const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row", 
        borderBottomColor: "#0096FF", 
        borderBottomWidth: 1, 
        paddingBottom: 8,
        marginBottom: 25
    },

 })