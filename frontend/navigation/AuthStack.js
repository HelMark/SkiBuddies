import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}
export default AuthStack;