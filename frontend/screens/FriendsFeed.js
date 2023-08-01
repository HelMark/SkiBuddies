import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, Dimensions, TouchableOpacity, StyleSheet, Image, RefreshControl, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Font from "expo-font";
import { useNavigationToNewPost, useNavigateToDicover } from "../components/NavigationHelper";
import axios from "axios"

const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const images = [ //Dummie values. Replace with const [images, setImages] = useState([]); inside function
  {user: "TestUser1", likes: "23", saved: "7", image: require("../Bilder/bilde1.jpg")},
  {user: "TestUser2", likes: "3", saved: "1", image: require("../Bilder/bilde3.jpg")},
  {user: "TestUser3", likes: "76", saved: "35", image: require("../Bilder/bilde4.jpeg")},
  {user: "TestUser4", likes: "123", saved: "96", image: require("../Bilder/bilde9.jpeg")},
  {user: "TestUser5", likes: "243", saved: "156", image: require("../Bilder/bilde15.jpeg")},
  {user: "TestUser6", likes: "237", saved: "72", image: require("../Bilder/bilde12.jpeg")},
  {user: "TestUser7", likes: "6", saved: "6", image: require("../Bilder/bilde7.jpeg")},
]
const API_ENDPOINT = ""; //API URL 

 const FriendsFeed = () => {
    const fetchImages = async () => {
      try{
        const respone = await axios.get(""); //Path to images from DB
        //setImages(response.data);
      } catch {
        console.error("Error fetching images:", error);
      }
    }

    const [fontLoaded, setFontLoaded] = useState(false);
    const loadFonts = async () => {
        await Font.loadAsync({
          'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
        });
        setFontLoaded(true)
      };
    
      useEffect(() => {
        loadFonts(); 
        //fetchImages();
      }, []);

    
    const navigateToNewPost = useNavigationToNewPost();
    const navigateToDicover = useNavigateToDicover();

    const handlePicturePress = () => {
      //add logic for going into a post
      console.log("Image Pressed")
    }

    const handleUserPress = () => {
      //logic for going to user
      console.log("User Pressed")
    }

    const [displayedImages, setDisplayedImages] = useState(images.slice(0,4));
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const loadMoreImages = () => {
      if (!isLoadingMore && displayedImages.length < images.length) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setDisplayedImages((prevDisplayedImages) => {
            const nextIndex = prevDisplayedImages.length;
            const newImages = images.slice(nextIndex, nextIndex + 4);
            return prevDisplayedImages.concat(newImages);
          });
          setIsLoadingMore(false);
        }, 500); 
      }
    };

    const handleScroll = (event) => {
      const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
      const distanceFromEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
      const threshold = 50;
      if (distanceFromEnd < threshold) {
        loadMoreImages();
      }
    };

      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Friend's Posts</Text>
            </View>
            <ScrollView 
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}>
            {displayedImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={handlePicturePress}>
                <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={handleUserPress}>
                  {fontLoaded &&<Text style={styles.userText}>{image.user}</Text>}
                  </TouchableOpacity>
                  <Image source={image.image} style={styles.image}/>
                  <View style={styles.likesSavedContainer}> 
                    {fontLoaded &&<Text style={styles.likesSavedText}><AntDesign name="hearto" size={22} color="#D3D3D3"/> {image.likes}</Text>}
                    {fontLoaded &&<Text style={styles.likesSavedText}><MaterialIcons name="save-alt" size={22} color="#D3D3D3"/>{image.saved}</Text>}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            </ScrollView>
            <TouchableOpacity style={{zIndex:1}} onPress={navigateToNewPost}>
                <Ionicons name = "ios-add-circle-outline" size={90} color="#D3D3D3" style={styles.newPostButton}/>
            </TouchableOpacity>
            <View style={styles.DiscoverPressContainer}>
            <TouchableOpacity onPress={navigateToDicover}>
                {fontLoaded &&<Text style={styles.DiscoverPressText}>Discover</Text>}
            </TouchableOpacity>
            </View>
        </SafeAreaView> 
      )
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2
  },
  headerText: {
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 26,
    fontWeight: "bold",
    color: "#0096FF",
    marginBottom: 5
  },
  newPostButton: {
    position: "absolute", 
    alignSelf: "center", 
    bottom: screenHeight*0.05,
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
    bottom: screenHeight*0.135,
    zIndex: 1
  },
  DiscoverPressText: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "#D3D3D3",
    fontWeight: "bold",
  },
  scrollView: {
    paddingTop: 5,
    flexGrow: 1,
    paddingBottom: 20
  },
  imageContainer: {
    marginBottom: 20
  },
  userText: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontWeight: "bold",
    color: "#0096FF",
    marginBottom: 5,
    left: 25,
  },
  image: {
    width: windowWidth*0.9,
    height: 450,
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 5
  },
  likesSavedContainer: {
    flexDirection: "row",
    alignContent: "center",
    width: windowWidth*0.9,
    marginTop: 5
  },
  likesSavedText: {
    fontFamily: "Roboto-Regular",
    marginLeft: 20,
    fontSize: 22,
    color: "#D3D3D3"
  }
})
 export default FriendsFeed; 