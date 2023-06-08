import {View, Text} from 'react-native';
import SearchBar from "/Users/sigurdhagen/Documents/SkiBuddies/SourceCode/SkiBuddies/components/SearchBar.js";
import RegionSelector from '../components/RegionSelector';
import React from 'react';

export default function Weather() {
    const handleSearch = searchText => {
        //Logic for places 
    };

    const handleRegionPress = region => {
        //logic for regions
    };

    return (
            <View style={{flex:1}}>
                <SearchBar onSearch= {handleSearch} />
                <RegionSelector onRegionPress = {handleRegionPress} />
            </View>  
    );
}