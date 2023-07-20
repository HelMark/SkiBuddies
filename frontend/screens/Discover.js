import {View,TouchableOpacity, Dimensions, StyleSheet, Image, RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font"
import { useNavigationToNewPost, useNavigateToFriendsFeed } from "../components/NavigationHelper";


const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DiscoverScreen = () => {
    const [images, setImages] = useState([ //Dummie values
        {id: 1, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde1.jpg")},
        {id: 2, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde3.jpg")},
        {id: 3, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg")},
        {id: 4, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde5.jpeg")},
        {id: 5, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde6.jpeg")},
        {id: 6, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde7.jpeg")},
        {id: 7, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde8.jpeg")},
        {id: 8, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde9.jpeg")},
        {id: 9, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde10.jpeg")},
        {id: 10, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde11.jpeg")},
        {id: 11, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde12.jpeg")},
        {id: 12, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde13.jpeg")},
    ]);



const handleSwipeUp = () => {
    const shuffledImages = [...images];
    for(let i = shuffledImages.length-1; i>= 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    setImages([...shuffledImages]);
};

const [refreshing, setRefreshing] = React.useState(false);
const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
        handleSwipeUp();
        setRefreshing(false);
    }, 500);
  }, []);
return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }>
        <View style={styles.gridContainer}>
            {images.map((image) => (
                <Image key={image.id} source={image.source} style={styles.image}/>
            ))}
        </View>
        </ScrollView>
    </SafeAreaView>
    );
};

const Discover = () => {
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

    const handleSearch = (searchText) => {
        //Logic for search for info destination
        console.log(searchText)
     };
     const navigateToNewPost = useNavigationToNewPost();
     const navigateToFriendsFeed = useNavigateToFriendsFeed();
     
     return (
        <View style= {{flex:1, justifyContent: "center", alignItems: "center" }}>
            <SearchBar onSearch={handleSearch} placeholder= "Search for your destination..."/>
            <TouchableOpacity style={{zIndex:1}} onPress={navigateToNewPost}>
                <Ionicons name = "ios-add-circle-outline" size={90} color="#D3D3D3" style={styles.newPostButton}/>
            </TouchableOpacity>
            <View style={styles.FriendsFeedContainer}>
            <TouchableOpacity onPress={navigateToFriendsFeed}>
                {fontLoaded &&<Text style={styles.FriendsFeedText}>Friend's Post</Text>}
            </TouchableOpacity>
            </View>
            <DiscoverScreen/>
        </View>
     );
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 5
    },
    gridContainer : {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        
    },
    image : {
        width: windowWidth/3.1,
        height: windowWidth/2.54,
        margin: 1
    },
    newPostButton: {
        position: "absolute", 
        alignSelf: "center", 
        top: screenHeight*0.60,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      FriendsFeedContainer: {
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 2,
        position: "absolute",
        right: windowWidth*0.14,
        bottom: screenHeight*0.18,
        zIndex: 1,
      },
    FriendsFeedText: {
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        color: "#D3D3D3",
        fontWeight: "bold"
    }
})

export default Discover;