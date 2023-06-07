import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabnavigation} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-navtive-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = 'Home';
const detailsName = "Details";
const settingsName = 'Settings';

const Tab = createBottomTabnavigation;


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName = {homeName} 
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let IconName;
                    let rn = route.name;
                    if(rn === homeName) {
                        IconName = focused ? 'home': 'home-outline' 
                    } else if(rn === detailsName) {
                        IconName = focused ? 'list' : 'list-outline';
                    }else if(rn === settingsName) {
                        IconName = focused ? 'settings' : 'settings-outline';
                }
                return <Ionicons name = {IconName} size={size} color= {color}/>
             },
            })}
            tabBarOptions= {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style : {padding: 10, height: 70},
            }}>
                
            <Tab.Screen name ={homeName} component = {HomeScreen}/>
            <Tab.Screen name ={detailsName} component = {DetailsScreen}/>
            <Tab.Screen name ={settingsName} component = {settingsName}/>

            </Tab.Navigator>
        </NavigationContainer> 
    )
}