import {View, Modal, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import NewPost from '../components/NewPost';
import { Ionicons } from '@expo/vector-icons';

export default function Discover() {
    const[newPost, setNewPost] = useState(null);
    const [showModal, setShowModal] = useState(null);

    const handleSearch = searchText => {
        //Logic for handling weather for searched place
    };

    const handleNewPostPress = newPost => {
        setNewPost(newPost);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };
    

    return (
        <View style = {{flex: 1}}>
            <SearchBar onSearch= {handleSearch} placeholder = "Search for your destination..." />
            <TouchableOpacity onPress={() => setShowModal(true)} >
            <Ionicons name="ios-add-circle-outline" size={90} color="#0096FF" style={{alignSelf:"center", position: "absolute", top:470}} />
            </TouchableOpacity>
            <Modal visible={showModal} onRequestClose={handleCloseModal}>
            <NewPost onClose={handleCloseModal}/>
            </Modal>
        </View>
    );
}

