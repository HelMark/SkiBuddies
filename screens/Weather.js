import {View, Text, Modal, TouchableOpacity } from 'react-native';
import SearchBar from "/Users/sigurdhagen/Documents/SkiBuddies/SourceCode/SkiBuddies/components/SearchBar.js";
import RegionSelector from '../components/RegionSelector';
import React, { useState } from 'react';

export default function Weather() {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSearch = searchText => {
        //Logic for searchfunction
    };

    const handleRegionPress = region => {
        setSelectedRegion(region);
    };

    const handleCloseModal = () => {
        setSelectedRegion(null);
    }

    return (
            <View style={{flex:1}}>
                <SearchBar onSearch= {handleSearch} />
                <RegionSelector onRegionPress = {handleRegionPress} />
                <Modal visible={selectedRegion !== null} animationType="slide">
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 18, marginBottom: 20}}>
                            Weather Reports from {selectedRegion}
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={{padding: 10, backgroundColor: 'lightgray'}}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>  
    );
}