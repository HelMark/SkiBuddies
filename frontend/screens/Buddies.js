import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import SearchBar from "../components/SearchBar";
import * as Font from 'expo-font';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const API_ENDPOINT = ""; //add API endpoint

const profiles = [ // Dummie values. Switch with: const [profiles, setProfiles] = useState([]);
  { id: 1, name: "Bob", age: 23, source: require("../Bilder/bilde1.jpg") },
  { id: 2, name: "John", age: 55, source: require("../Bilder/bilde3.jpg") },
  { id: 3, name: "Mike", age: 69, source: require("../Bilder/bilde4.jpeg") },
  { id: 4, name: "Karen", age: 42, source: require("../Bilder/bilde5.jpeg") },
  { id: 5, name: "Kim", age: 29, source: require("../Bilder/bilde6.jpeg") },
  { id: 6, name: "Siri", age: 21, source: require("../Bilder/bilde7.jpeg") }
];

export default function Buddies() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  const fetchProfiles = async () => {
    try {
        const reponse = await axios.get("") //Path to Profiles
        setProfiles(reponse.data);
    } catch {
        console.error("Error fetching images:", error);
    }
}

  useEffect(() => {
    loadFonts();
    //fetchProfiles();
  }, []);

  const handleSearch = (searchText) => {
    // Logic for search for profile
    console.log(searchText);
  };
  const handleProfilePress = () => {
    //Logic for showing profile
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar onSearch={handleSearch} placeholder="Search for a profile..." />
        {fontLoaded && <Text style={styles.headerText}>Recommended Profiles</Text>}
      </View>
      <View style={styles.gridContainer}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.profileContainer}>
            <TouchableOpacity onPress={handleProfilePress}>
            <Image source={profile.source} style={styles.image} />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.age}>{profile.age} years old</Text>
            </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: "center",
    borderBottomColor: "#0096FF",
    borderBottomWidth: 2
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0096FF",
    marginTop: 10,
    marginBottom: 4,
    fontFamily: "Roboto-Regular"
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  profileContainer: {
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: screenWidth / 2.3,
    height: screenHeight / 4.6,
    borderRadius: 10,
  },
  profileInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  age: {
    color: "white",
    fontSize: 12,
  }
});
