import {View, Text, Modal, StyleSheet, Image } from 'react-native';
import SearchBar from "../components/SearchBar.js";
import RegionSelector from '../components/RegionSelector.js';
import React, { useState, useEffect } from 'react';
import WeatherArea from '../components/WeatherArea.js';
import * as Font from 'expo-font';


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

    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSearch = searchText => {
        //Logic for handling searched destination
        console.log(searchText)
    };

    const handleRegionPress = region => {
        setSelectedRegion(region);
    };

    const handleCloseModal = () => {
        setSelectedRegion(null);
    }

    return (
            <View style={{flex:1}}>
                <SearchBar onSearch= {handleSearch} placeholder= "Search for weather reports for your destination... " />
                <RegionSelector onRegionPress = {handleRegionPress} />
                <View style={styles.footer}>
                    {fontLoaded &&<Text style={styles.footerText}>Weather data is delivered by: </Text>}
                    <View style={styles.footerImagesContainer}>
                    <Image style={styles.footerImage} source={require("../Bilder/varsom.png")} />
                    <Image style={styles.footerImage} source={require ("../Bilder/met.institutt.png")}/>
                    </View>
                </View>
                <Modal visible={selectedRegion !== null} animationType="slide">
                   <WeatherArea selectedRegion={selectedRegion} onClose={handleCloseModal}/>
                </Modal>
            </View>  
    );
}
const styles = StyleSheet.create({
    footer:{
        bottom: 110,
        alignItems: "center",
    },
    footerText:{
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