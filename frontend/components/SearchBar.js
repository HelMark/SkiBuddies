import React, { useState } from "react";
import { View, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({onSearch, placeholder}) => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSearch = () => {
        onSearch(searchText);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    }
    const handleKeyPress = (event) => {
        if(event.nativeEvent.key === "Enter") {
            handleSearch();
        }
    }
    const containerStyles = {
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: isFocused ? "#0096FF" : "#D3D3D3", // Conditionally set the border color
        height: 40,
      };

    return (
        <View style={containerStyles}>
            <FontAwesome name="search" size={22} color="#D3D3D3" style={{marginRight: 8, marginTop: 5}}/>
            <TextInput 
            style={{flex: 1}}
            placeholder= {placeholder}
            value={searchText}
            onChangeText= {text => setSearchText(text)}
            onFocus = {handleFocus}
            onBlur = {handleBlur}
            onSubmitEditing={handleSearch}
            onKeyPress={handleKeyPress}
            /> 
        </View>
    );
};

export default SearchBar;