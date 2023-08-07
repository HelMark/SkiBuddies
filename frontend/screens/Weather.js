import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import SearchBar from "../components/SearchBar.js";
import * as Font from 'expo-font';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const API_ENDPOINT = ""; //add API endpoint

const recentSearch = [ // Dummie values. Switch with: const [recentSearch, setRecentSearch] = useState([]);
  { id: 1, place: "Storhornet", description: "1589 moh, Oppdal kommune, Trøndelag", source: require("../Bilder/storhornet.jpeg") },
  { id: 2, place: "Ruten", description: "1040 moh, Heim og Rindal Kommune, Trøndelag", source: require("../Bilder/ruten.jpeg") },
  { id: 3, place: "Pilan", description: "775 moh, Flakstad kommune, Nordland",  source: require("../Bilder/pilan.jpeg") },
  { id: 4, place: "Hurrungane", description: "2000 moh, Luster kommune, Vestland", source: require("../Bilder/hurrungane.jpeg") },
];

export default function Weather() {
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

    

    const handleSearch = searchText => {
        //Logic for handling searched destination
        console.log(searchText)
    };
    
    const handleRecentPress = () => {
        //Logic for handling a recent search press
        console.log("Recent post press")
    }

    return (
            <SafeAreaView style={styles.container}>
                <SearchBar onSearch= {handleSearch} placeholder= "Search for weather reports for your destination... " />
                <View style={styles.headerContainer}>
                    {fontLoaded &&<Text style={styles.headerText}>Recent Search</Text>}
                </View>
                <View style={styles.gridContainer}>
                {recentSearch.map((search) => (
                    <TouchableOpacity key={search.id} style={styles.searchContainer} onPress={handleRecentPress}>
                        <Image style={styles.searchImage} source={search.source} />
                        <View style={styles.searchDetails}>
                            <Text style={styles.placeName}>{search.place}</Text>
                            <Text style={styles.description}>{search.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
                <View style={styles.footer}>
                    {fontLoaded &&<Text style={styles.footerText}>Weather data is delivered by: </Text>}
                    <View style={styles.footerImagesContainer}>
                        <Image style={styles.footerImage} source={require("../Bilder/varsom.png")} />
                        <Image style={styles.footerImage} source={require ("../Bilder/met.institutt.png")}/>
                    </View>
                </View>
            </SafeAreaView>  
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
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
        height: screenHeight*0.53,
        marginTop: 5
    },
    searchContainer: {
        width: screenWidth*0.8,
        margin: 5,
        backgroundColor: "#0096FF",
        flexDirection: "row",
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 4
    },
    searchImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    searchDetails: {
        marginLeft: 10,
        width: 200
    },
    placeName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Roboto-Regular",
    },
    description: {
        fontSize: 16,
        color: "white",
        fontFamily: "Roboto-Regular",
    },
    footer: { 
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#0096FF",
        fontFamily: "Roboto-Regular"
    },
    footerImagesContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
    footerImage: {
        width: 100,
        height: 100,
        marginHorizontal: 30,
        marginTop: 5,
        borderRadius: 5
    }
})