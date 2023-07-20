import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font";
import { useNavigationToNewPost, useNavigateToDicover } from "../components/NavigationHelper";
const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

 const FriendsFeed = () => {
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

    
    const navigateToNewPost = useNavigationToNewPost();
    const navigateToDicover = useNavigateToDicover();

      return (
        <View style={styles.container}>
            <Text>Friend's Posts</Text>
            <ScrollView>

            </ScrollView>
            <TouchableOpacity style={{zIndex:1}} onPress={navigateToNewPost}>
                <Ionicons name = "ios-add-circle-outline" size={90} color="#D3D3D3" style={styles.newPostButton}/>
            </TouchableOpacity>
            <View style={styles.DiscoverPressContainer}>
            <TouchableOpacity onPress={navigateToDicover}>
                {fontLoaded &&<Text style={styles.DiscoverPressText}>Discover</Text>}
            </TouchableOpacity>
            </View>
        </View> 
      )
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newPostButton: {
    position: "absolute", 
    alignSelf: "center", 
    bottom: screenHeight*0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  DiscoverPressContainer: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2,
    position: "absolute",
    left: windowWidth*0.18,
    bottom: screenHeight*0.15,
    zIndex: 1
  },
  DiscoverPressText: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "#D3D3D3",
    fontWeight: "bold"
  }
})
 export default FriendsFeed; 