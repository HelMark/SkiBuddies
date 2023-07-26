import React, {useContext} from "react";
import AppStack from "./AppStack"
import AuthStack from "./AuthStack"
import {View, ActivityIndicator } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);
    
    if(isLoading) {
        return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size={"large"} />
        </View>
        )
    }
    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
export default AppNav;