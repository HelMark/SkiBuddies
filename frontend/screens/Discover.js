import {View, Modal, TouchableOpacity, Dimensions, PanResponder, StyleSheet, Image, Text, Animated } from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import NewPost from '../components/NewPost';
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;

const DiscoverScreen = () => {
    const [images, setImages] = useState([ //Dummie values
        {id: 1, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde1.jpg")},
        {id: 2, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde3.jpg")},
        {id: 3, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg")},
        {id: 4, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde5.jpeg")},
        {id: 5, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde6.jpeg")},
        {id: 6, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde7.jpeg")},
        {id: 7, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde8.jpeg")},
        {id: 8, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde9.jpeg")},
        {id: 9, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde10.jpeg")},
        {id: 10, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde11.jpeg")},
        {id: 11, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde12.jpeg")},
        {id: 12, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde13.jpeg")},
    ]);

    const[swipeUpGesture] = useState(new Animated.Value(0));


const handleSwipeUp = () => {
    const shuffledImages = [...images];
    for(let i = shuffledImages.length-1; i>= 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    setImages([...shuffledImages]);
};

const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy < -50 && Math.abs(gestureState.dx) < 50;
    },
    onPanResponderRelease: () => {
        handleSwipeUp();
    },
});

return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSwipeUp} style={{zIndex: 1,top : windowWidth*1.32, left: 240, position: "absolute"}}>
        <Ionicons name="refresh-circle-outline" size={60} color="#0096FF" style={{alignSelf: "center", zIndex:1,}} />
        </TouchableOpacity>
        <Animated.View style={{transform : [{translateY: swipeUpGesture}]}}>
        <View style={styles.gridContainer}>
            {images.map((image) => (
                <Image key={image.id} source={image.source} style={styles.image}/>
            ))}
        </View>
        </Animated.View>
    </View>
    );
};

const Discover = () => {
    const [showModal, setShowModal] = useState(null);
    const [newPost, setNewPost] = useState(null);

     const handleNewPostPress = (newPost) => {
        setNewPost(newPost);
        setShowModal(true);
     };
     const handleSearch = (searchText) => {
        //Logic for search for info destination
        console.log(searchText)
     };
     const handleCloseModal = () => {
        setShowModal(false);
     };
     return (
        <View style= {{flex:1, justifyContent: "center", alignItems: "center" }}>
            <SearchBar onSearch={handleSearch} placeholder= "Search for your destination..."/>
            <TouchableOpacity style={{zIndex:1}} onPress={() => {
                setShowModal(true)
                handleNewPostPress(newPost)}}>
                <Ionicons
                name = "ios-add-circle-outline"
                size={90}
                color="#0096FF"
                style={{position: "absolute", alignSelf: "center", top: 500}}/>
            </TouchableOpacity>
      
            <Modal visible={showModal} onRequestClose={handleCloseModal}>
                <View style={styles.modalContainer}>
                <NewPost onClose={handleCloseModal} />
                </View>
            </Modal>
            <DiscoverScreen/>
        </View>
     );
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 5
    },
    gridContainer : {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        
    },
    image : {
        width: windowWidth/3.1,
        height: windowWidth/2.50,
        margin: 1
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Discover;