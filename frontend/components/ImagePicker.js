import React, { useState } from "react";
import {View, Button, Image} from "react-native"
import * as ImagePicker from 'react-native-image-picker'

const ImagePickerComponent =() => {
    const[selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = ()=> {
        ImagePicker.launchImageLibrary({}, (response) => {
            if(response.didCancel) {
                console.log("User cancelled image picker");
            } else if(response.error) {
                console.log("Image picker error:", response.error);
            } else {
                setSelectedImage(response.uri);
            }
        });
    };

    return (
        <View>
            <Button title="Selected Image" onPress={openImagePicker}/>
            {selectedImage && <Image source={{uri: selectedImage}} style={{width: 200, height: 200}}/>}
        </View>
    );
};
export default ImagePickerComponent;