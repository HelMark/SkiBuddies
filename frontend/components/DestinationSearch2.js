import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, ActivityIndicator, View, Text, FlatList, Image} from "react-native";
import filter from "lodash.filter";

//This is supposed to Replace the DestinationSearch file. It will be used to check integtration of frontend and backend. 
//Need to change the API_ENDPOINT URL, and check that the different item.xxx matches the one fecthed from DB

const API_ENDPOINT = '';

export default function DestinationSearchBar2() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    },[])

    const fetchData = async(url) => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.result);
            console.log(json.result);
            setFullData(json.result);
            setIsLoading(false)
        } catch(error) {
            setError(error);
            console.log(error);
            setIsLoading(false)
        }
    }

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch =(query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setData(filteredData)
    }
    const contains = ({name, email, query}) => {
        const {first, last} = name;
        if(first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
        } return false
    }

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size={"large"} color="#5500dc"/>
            </View>
        )
    }

    if(error) {
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
               <Text>Error in fetching data... Please check your internet connection</Text>
            </View>
    }

    <SafeAreaView style={styles.container}>
        <TextInput placeholder="Search" 
        clearButtonMode="always" 
        style={styles.TextInput} 
        autoCapitalize="none" 
        autoCorrect="none"
        onChangeText={handleSearch(query)}/>
        <FlatList 
        data={data}
        keyExtractor={( item ) => item.login.username }
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
                <Image source={{uri: item.picture.thumbnail}} style={styles.image}/>
                <View>
                    <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                    <Text style={styles.textEmail}>{item.Email}</Text>
                </View>
            </View>
        )}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    TextInput: {
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderColor: "#D3D3D3", 
        borderWidth: 1, 
        borderRadius: 8
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "bold",
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "gray",
    }
})