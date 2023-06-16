import {View, Text, Modal, TouchableOpacity } from 'react-native';
import SearchBar from "../components/SearchBar.js";
import RegionSelector from '../components/RegionSelector.js';
import React, { useState } from 'react';

export default function Weather() {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSearch = searchText => {
        //Logic for handling searched destination
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
                <Modal visible={selectedRegion !== null} animationType="slide">
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 18, marginBottom: 20, top:-300, left:20}}>
                            Weather for {selectedRegion}
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={{padding: 10, backgroundColor: 'lightgray', top:-350, left:-150}}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>  
    );
}