import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, Dimensions, Image } from "react-native";
import ImagePickerComponent from "./ImagePicker";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const PictureSwiper = () => {
    const [imgActive, setImgActive] = useState(0);
    const [images, setImages] = useState([]);

    const onImageSelect = (uri) => {
        setImages([...images, uri]);
    }

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== imgActive) {
                setImgActive(slide)
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                {images.length > 0 ? (
                    <ScrollView onScroll={({ nativeEvent }) => onchange(nativeEvent)} showsHorizontalScrollIndicator={false} pagingEnabled horizontal style={styles.wrap}>
                        {
                            images.map((uri, index) =>
                                <Image
                                    key={uri}
                                    resizeMode="stretch"
                                    style={styles.wrap}
                                    source={{ uri: uri }} />)
                        }
                    </ScrollView>
                ) : (
                        // Placeholder when no images are selected
                        <View style={styles.placeholderContainer}>
                            <View style={styles.placeholder} />
                        </View>
                    )}

                <View style={styles.wrapDot}>
                    {
                        images.map((uri, index) =>
                            <Text
                                key={uri}
                                style={imgActive === index ? styles.dotActive : styles.dot} >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>
            <ImagePickerComponent onImageSelect={onImageSelect} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: HEIGHT * -0.00001,
        marginBottom: 10,
        alignSelf: "center"
    },
    wrap: {
        width: WIDTH * 0.75,
        height: HEIGHT * 0.25
    },
    wrapDot: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignSelf: "center"
    },
    dotActive: {
        margin: 3,
        color: "#0096FF"
    },
    dot: {
        margin: 3,
        color: "#D3D3D3"
    },
    placeholderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH * 0.75,
        height: HEIGHT * 0.25,
    },
    placeholder: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#D3D3D3",
        borderRadius: 8,
    }
});

export default PictureSwiper;
