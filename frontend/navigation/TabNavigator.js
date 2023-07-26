import React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { Buddies, Discover, Profile, Chat, Weather } from "../screens"
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const screenNames = {
    Buddies: "Buddies",
    Weather: "Weather",
    Discover: "Discover",
    Profile: "Profile",
    Chat: "Chat",
  };
  
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 90,
    background: '#fff',
  },
};

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Buddies"
        component={Buddies}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5
                name="skiing-nordic"
                size={30}
                color={focused ? "#0096FF" : "#D3D3D3"}
              />
              <Text style={{ fontSize: 13, color: "black" }}>
                {screenNames.Buddies}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="snowflake-alert"
                size={30}
                color={focused ? "#0096FF" : "#D3D3D3"}
              />
              <Text style={{ fontSize: 13, color: "black" }}>
                {screenNames.Weather}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderColor: "#0096FF",
                borderWidth: 3,
                width: Platform.OS == "ios" ? 70 : 80,
                height: Platform.OS == "ios" ? 70 : 80,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 35 : 40,
              }}
            >
              <FontAwesome5
                name="mountain"
                size={30}
                color={focused ? "#0096FF" : "#D3D3D3"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="user-o"
                size={30}
                color={focused ? "#0096FF" : "#D3D3D3"}
              />
              <Text style={{ fontSize: 13, color: "black" }}>
                {screenNames.Profile}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="chat"
                size={30}
                color={focused ? "#0096FF" : "#D3D3D3"}
              />
              <Text style={{ fontSize: 13, color: "black" }}>
                {screenNames.Chat}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppTabs;
