import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import SearchBar from "../components/SearchBar";
import Swiper from "react-native-deck-swiper";
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const profiles = [
  { id: 1, name: "profile 1", image: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde1.jpg") },
  { id: 2, name: "profile 2", image: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde3.jpg") },
  { id: 3, name: "profile 3", image: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg") }
];

const { width } = Dimensions.get('window');
const screenHeight = Dimensions.get('window').height;

export default function Buddies() {
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
    //Logic for search for profile
    console.log(searchText)
 };

    const renderCard = (profile) => {
    return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={profile.image} style={styles.image} />
        {fontLoaded &&<Text style={styles.profileId}>{profile.id}</Text>}
       {fontLoaded &&<Text style={styles.profileName}>{profile.name}</Text>}
      </View>

    </View>
     );
    };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar onSearch={handleSearch} placeholder={"Search for profiles..."} />
        {fontLoaded &&<Text style={styles.headerText}>Recommended Profiles:</Text>}
      </View>
      <View style={styles.contentContainer}>
        <Swiper
          cards={profiles}
          renderCard={renderCard}
          onSwipedLeft={(index) => console.log("swiped left")}
          onSwipedRight={(index) => console.log("swiped right")}
          cardStyle={styles.swiperCard}
          disableBottomSwipe={true}
          disableTopSwipe={true}
          backgroundColor="white"
          cardVerticalMargin={10}
          stackSize={3} //Might need to change this 
        />
      </View>
      <View style={styles.bottomIconContainer}>
        <MaterialIcons name="highlight-remove" size={52} color="#E54C38" style={styles.icon} />
        <MaterialIcons name="add-circle-outline" size={52} color="#00AB41" style={styles.icon} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: "center"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0096FF",
    marginTop: 10,
    fontFamily: "Roboto-Regular"
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  swiperCard: {
    width: width-40,
    height: screenHeight*0.62,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    overflow: 'hidden'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  profileId: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Roboto-Regular"
  },
  profileName: {
    position: 'absolute',
    top: "80%",
    right: "65%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: "Roboto-Regular"
  },
  bottomIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    top: screenHeight*0.635
  },
  icon: {
    zIndex: 1,
    marginHorizontal: 25,
    shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
  },
});

