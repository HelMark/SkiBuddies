import React, {useEffect, useState } from "react";
import {View, StyleSheet, Text, Image, Dimensions, FlatList} from "react-native"
import ImagePickerComponent from "./ImagePicker";
import * as Font from "expo-font";

const screenHeight = Dimensions.get('window').height;

export default function NewPostImages() {
    const[fontLoaded, setFontLoaded] = useState(false);
    const[images, setImages] = useState([]);

    const loadFonts = async() => {
        await Font.loadAsync({
            "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
        });
        setFontLoaded(true);
    };
    useEffect(() => {
        loadFonts();
      }, []);

    const onImageSelect = (uri) => {
        setImages([...images, uri])
    };

    const renderImageItem = ({ item, index }) => {
        const zIndex = images.length - index;
    const imageStyle = {
    zIndex: zIndex,
    marginLeft: index === 0 ? 0 : -150,
  };
    return <Image source={{ uri: item }} style={[styles.image, imageStyle]} />;
};

    const renderEmptyImage = () => {
        return  (
            <View style={styles.placeholderContainer}>
                <View style={styles.placeholder}/>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ImagePickerComponent onImageSelect={onImageSelect}/>
            <FlatList
            data={images}
            renderItem={renderImageItem}
            ListEmptyComponent={renderEmptyImage}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageContainer}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    top: screenHeight*-0.00001,
    marginBottom: 10
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginHorizontal: 10,
        backgroundColor: "transparent"
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder : {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#D3D3D3",
        borderRadius: 8,
        marginHorizontal: 10
    }
})

