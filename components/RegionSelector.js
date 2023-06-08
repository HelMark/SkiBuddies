import React, { useRef, useEffect } from "react";
import {View, Image, TouchableOpacity } from 'react-native';

export default function RegionSelector({ onRegionPress }) {
    const handleRegionPress = region => {
        onRegionPress(region);
    };

    return (
        <View>
            <Image
            source={require ('/Users/sigurdhagen/Documents/SkiBuddies/SourceCode/SkiBuddies/norge.png')}
            style = {{width: '100%' , height: '80%', justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "#D3D3D3", borderRadius: 10}}
            />
            <TouchableOpacity
            onPress ={() => handleRegionPress('region1')}
            style={{position : 'absolute', top: 50, left: 50, width: 100, height: 100}}
            />
            <TouchableOpacity
            onPress={() => handleRegionPress('region2')}
            style= {{position: 'absolute', top: 150, left: 150, width:100, height: 100}}
            /> 
        </View>
    );
}