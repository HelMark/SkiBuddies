import React, { useRef, useEffect } from "react";
import {View, Image, TouchableOpacity } from 'react-native';

export default function RegionSelector({ onRegionPress }) {
    const handleRegionPress = region => {
        onRegionPress(region);
    };

    return (
        <View style={{position: 'relative', paddingTop: 10}}>
            <Image
            source={require ('../Bilder/norge.jpeg')}
            style = {{
                width: '100%', 
                height: '80%', 
                justifyContent: "center",
                alignItems: "center", 
                borderWidth: 3, 
                borderColor: "#D3D3D3", 
                borderRadius: 10,
            }}
            />
            <View style ={{position: 'absolute', bottom:0}}>
            <TouchableOpacity
            onPress ={() => handleRegionPress('Troms og Finnmark')}
            style={{position : 'absolute', top: -580, left: 240, width: 80, height: 80}} //Ferdig
            />
            <TouchableOpacity
            onPress={() => handleRegionPress('Nordland')}
            style= {{position: 'absolute', top: -470, left: 160, width:80, height: 80}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Trøndelag')}
            style= {{position: 'absolute', top: -370, left: 120, width:60, height: 60}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Innlandet')}
            style= {{position: 'absolute', top: -285, left: 120, width:50, height: 50}} //Ferdig 
            /> 
             <TouchableOpacity
            onPress={() => handleRegionPress('Viken')}
            style= {{position: 'absolute', top: -230, left: 110, width:25, height: 25}} //Ferdig 
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Vestfold og Telemark')}
            style= {{position: 'absolute', top: -215, left: 83, width: 30, height: 30}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Agder')}
            style= {{position: 'absolute', top: -190, left: 65, width:25, height: 25}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Rogaland')}
            style= {{position: 'absolute', top: -210, left: 40, width:25, height: 25}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Vestland')}
            style= {{position: 'absolute', top: -280, left: 30, width:50, height: 50}} //Ferdig
            /> 
            <TouchableOpacity
            onPress={() => handleRegionPress('Møre og Romsdal')}
            style= {{position: 'absolute', top: -320, left: 70, width:25, height: 25}} //Ferdig
            /> 
        </View>
        </View>
    );
}