import React, { useState } from "react";
import { View, TextInput, Button} from 'react-native';

const SearchBar = ({onSearch, placeholder}) => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSearch = () => {
        onSearch(searchText);
        setSearchText('');
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    }

    const inputStyles ={
        height: 40,
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: isFocused ? "#0096FF" : "#D3D3D3"
    };

    return (
        <View style= {{width: "100%"}}>
            <TextInput 
            style={inputStyles}
            placeholder= {placeholder}
            value={searchText}
            onChangeText= {text => setSearchText(text)}
            onFocus = {handleFocus}
            onBlur = {handleBlur}
            /> 
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
};
export default SearchBar;