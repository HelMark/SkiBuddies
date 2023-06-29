import React from "react";
import {View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function WeatherArea( {onClose, selectedRegion }) {

    const handlePressClose = () => {
        onClose();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Pressable onPress={handlePressClose}>
                <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton}/>
            </Pressable>
            <Text style={styles.title}>{selectedRegion}</Text>
            <View style={{width: 40}}></View>
            </View>
            <ScrollView style={styles.body}>
                <Text style={styles.bodyTitle}>Weahter reports: </Text>
                <Image style={styles.image} source={require ("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/Vaerdata.png")} />
                <Text style={styles.bodyTitle}>Avalanche Danger: </Text>
                <Image style={styles.dangerImage} source={require ("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/fare.png")}/>
                <Text style={styles.bodyTitle}>Avlanche Reports From User:</Text>
                <View style={styles.reportsContainer}>
                    <Text style={styles.reportText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Vel eros donec ac odio tempor orci dapibus. Dolor magna eget est lorem ipsum dolor.
                    </Text>
                </View>
                <View style={styles.reportsContainer}>
                <Text style={styles.reportText}>
                        Ac auctor augue mauris augue neque gravida in. Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                        Amet nulla facilisi morbi tempus iaculis urna. Suspendisse interdum consectetur libero id. 
                        Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis
                    </Text>
                </View>
                <Text style={styles.bodyTitle}>Snow Reports From User:</Text>
                <View style={styles.reportsContainer}>
                    <Text style={styles.reportText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Vel eros donec ac odio tempor orci dapibus. Dolor magna eget est lorem ipsum dolor.
                    </Text>
                </View>
                <View style={styles.reportsContainer}>
                <Text style={styles.reportText}>
                        Ac auctor augue mauris augue neque gravida in. Justo donec enim diam vulputate ut pharetra sit amet aliquam.
                        Amet nulla facilisi morbi tempus iaculis urna. Suspendisse interdum consectetur libero id. 
                        Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis
                    </Text>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header :{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    backButton: {
        width:40,
        marginTop: 20,
        right: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1,
        alignSelf: "center",
        marginTop: 20,
        color: "#0096FF", 
        },
    body: {
        flex: 1
    },
    bodyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "#0096FF", 
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10
        },
    image: {
        width: 300,
        height: 200,
        marginLeft: 20
    },
    reportsContainer: {
        width: 300,
        borderColor: "#0096FF",
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 20,
        marginBottom: 5
    },
    reportText: {
        fontSize: 12,
        color: "#D3D3D3"
    },
    dangerImage: {
        width: 300,
        height: 150,
        alignSelf: "center"
      },
})