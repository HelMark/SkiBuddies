import {View, Image, Pressable, StyleSheet, Text, ScrollView, Modal} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import EditProfile from '../components/EditProfile'
import * as Font from 'expo-font';

const ProfileScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const loadFonts = async () => {
        await Font.loadAsync({
          'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
        });
        setFontLoaded(true)
      };
    
      useEffect(() => {
        loadFonts(); 
      }, []);    

    const [selectedMenuItem, setSelectedMenuItem] = useState("myPosts");

    const [MyImages, setMyImages] = useState([ //Dummie values 
    {id: 1, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde1.jpg")},
    {id: 2, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde3.jpg")},
    {id: 3, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg") }
    ])

    const [savedImages, setSavedImages] = useState([ //Dummie values
    {id: 1, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde5.jpeg")},
    {id: 2, source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde7.jpeg")},
    {id: 3 , source: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde8.jpeg")}
    ])

    const handleMenuPress = (menuItem) => {
        setSelectedMenuItem(menuItem);
        if(scrollViewRef.current) {
            scrollViewRef.current.scrollTo({y:0, animated: true});
        }
    };
    const handleEditProfilePress = (editProfile) => {
        setEditProfile(true);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setEditProfile(false);
    };

    const scrollViewRef = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [editProfile, setEditProfile] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image 
                source={require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg")}
                style={styles.profileImage}/>
                <View style={styles.BuddiesCountContainer}>
                    {fontLoaded &&<Text style={styles.BuddiesCount}>123</Text>}
                    {fontLoaded &&<Text style={styles.BuddieLabel}>Buddies</Text>}
                </View>
            </View>
            <View style={styles.bioContainer}>
                {fontLoaded &&<Text style={styles.bioText}>Hobbies: Running, Hiking, Backcountry skiing, climbing</Text>}
                {/*Dummie value, need to fecth user data and display the Hobbies*/}
                {fontLoaded &&<Text style={styles.bioText}>Hometown: "Trondheim"</Text>}
                {/* Same as over */}
            </View>

            <Pressable style={styles.editProfileButton} onPress={handleEditProfilePress}>
                {fontLoaded &&<Text style={styles.editProfileButtonText}>Edit Profile</Text>}
            </Pressable>
            <Modal visible={showModal} onRequestClose={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <EditProfile onClose={handleCloseModal}/>
                </View>
            </Modal>

            <View style={styles.menu}>
                <Pressable 
                style={[
                styles.menuItem, selectedMenuItem === "myPosts" && styles.selectedMenuItem]}
                onPress={() => handleMenuPress("myPosts")}>
                    <FontAwesome 
                    name="picture-o" 
                    size={35} 
                    style={[styles.menuItemIcon, selectedMenuItem === "myPosts" && styles.selectedMenuItemIcon]}/>
                </Pressable>
                <Pressable
                style={[styles.menuItem, selectedMenuItem === "savedPosts" && styles.selectedMenuItem]}
                    onPress={() => handleMenuPress("savedPosts")}>
                    <MaterialIcons 
                    name="save-alt" 
                    size={35} 
                    style={[styles.menuItemIcon ,selectedMenuItem == "savedPosts" && styles.selectedMenuItemIcon]}/>
                </Pressable>
            </View>
            <ScrollView ref={scrollViewRef}>
                {selectedMenuItem == "myPosts" && (
                    <View style={styles.imageGrid}>
                        {MyImages.map((image) => (
                            <Image key={image.id} source={image.source} style={styles.gridImage}/>
                        ))}
                    </View>
                )}
                {selectedMenuItem === "savedPosts" && (
                    <View style={styles.imageGrid}>
                        {savedImages.map((image)=> (
                            <Image key={image.id} source={image.source} style={styles.gridImage}/>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        fontFamily: "Roboto-Regular"
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 3,
        marginRight: 16,
    },
    BuddiesCountContainer: {
        flexDirection: "column",
        borderColor: "#D3D3D3",
        borderWidth: 3,
        width: 100,
        height: 100,
        borderRadius: 8,
        alignItems: "center",
        marginLeft: 30,
    },
    BuddiesCount: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
        top: 16,
        fontFamily: "Roboto-Regular"
    },
    BuddieLabel: {
        fontSize: 18,
        color: "gray",
        top: 24,
        fontFamily: "Roboto-Regular"
    },
    editProfileButton: {
        backgroundColor: "#0096FF",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 4
    },
    editProfileButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Roboto-Regular"
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 4
    },
    menuItem: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 8,
        alignItems: "center",
        elevation: 2
    },
    selectedMenuItem: {
    }, 
    selectedMenuItemIcon: {
        color: "#0096FF",
    },
    imageGrid: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    gridImage: {
        width: "32%",
        height: 150,
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "white"
      },
      bioText: {
        fontSize: 16,
        fontFamily: "Roboto-Regular"
      },
      bioContainer: {
        paddingBottom: 10,
        paddingTop: 5,
        borderTopWidth: 2,
        borderTopColor: "#0096FF"
      }
})    

export default ProfileScreen;