import {View, Image, Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("MyPosts");

    const handleMenuPress = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const handleEditProfile = () => {
        //TODO: add open edit profile screen
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image 
                source={require("/Users/markus/Desktop/Prosjekt/SkiBuddies/SkiBuddies/Bilder/bilde4.jpeg")}
                style={styles.profileImage}/>
                <View style={styles.BuddiesCountContainer}>
                    <Text style={styles.BuddiesCount}>123</Text> 
                    <Text style={styles.BuddieLabel}>Buddies</Text>
                </View>
            </View>

            <Pressable style={styles.editProfileButton} onPress={handleEditProfile}>
                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </Pressable>

            <View style={styles.menu}>
                <Pressable 
                style={[
                styles.menuItem,
                selectedMenuItem === "myPosts" && styles.selectedMenuItem]}
                onPress={() => handleMenuPress("myPosts")}>
                    <FontAwesome name="picture-o" size={35} style={[styles.menuItemIcon, selectedMenuItem === "myPosts" && styles.selectedMenuItemIcon]} />
                </Pressable>
                <Pressable
                style={[
                    styles.menuItem,
                    selectedMenuItem === "savedPosts" && styles.selectedMenuItem]}
                    onPress={() => handleMenuPress("savedPosts")}>
                    <MaterialIcons name="save-alt" size={35} style={[styles.menuItemIcon ,selectedMenuItem == "savedPosts" && styles.selectedMenuItemIcon]}/>
                </Pressable>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
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
        top: 16
    },
    BuddieLabel: {
        fontSize: 18,
        color: "gray",
        top: 24
    },
    editProfileButton: {
        backgroundColor: "#0096FF",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 16
    },
    editProfileButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
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
        alignItems: "center"
    },
    selectedMenuItem: {
    }, 
    selectedMenuItemIcon: {
        color: "#0096FF",
    }
})    

export default ProfileScreen;