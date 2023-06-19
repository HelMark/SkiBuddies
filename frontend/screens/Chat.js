import {ScrollView, View, TouchableOpacity, StyleSheet, Text, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons';
import NewGroupComponent from '../components/NewGroup';

export default function Chat() {

    const [conversations, setConversations] = useState([ //Dummie values
        {id: 1, name: "Conversation 1"},
        {id: 2, name: "Conversation 2"},
        {id: 3, name: "Conversation 3"},
    ]);

    const handleSearch = (searchText) => {
        //Logic for search for profile
     };

    const handleConversationPress = (conversation) =>{
        //Logic for navigating into a chat
    };

    const handleCloseModal = () => {
        setNewGroup(false);
        setShowModal(false);
    };

    const [showModal, setShowModal] = useState(false);
    const [NewGroup, setNewGroup] = useState(false);

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} placeholder= "Search for a profile..."/>
            <View style={styles.header}>
                <Text style={styles.title}>Conversations</Text>
                <Pressable onPress={() => setShowModal(true)}>
                    <MaterialIcons name="group-add" size={40} color="#0096FF" style={styles.button} />
                </Pressable>
            </View>
            <ScrollView style={styles.conversationContainer}>
                {conversations.map((conversation) => (
                    <TouchableOpacity
                    key={conversation.id}
                    style={styles.conversationItem}
                    onPress={() => handleConversationPress(conversation)}>
                        <Text>{conversation.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal visible={showModal} onRequestClose={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <NewGroupComponent onClose={handleCloseModal}/>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#D3D3D3",
        paddingTop: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0096FF",
        left: 110,
        paddingTop: 5,
        paddingBottom: 10
    },
    conversationContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    conversationItem: {
        paddingVertical:30,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3"
    }, 
    button: {
        paddingRight: 10,
        elevation: 5,
        color: "#0096FF",
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "white"
      }
})