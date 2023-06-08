import {Text, Platform, View} from "react-native";
import {Buddies, Discover, Profile, Chat, Weather} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShow: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    rigth: 0,
    left: 0,
    elevation: 0,
    height: 90,
    background: "#fff"
  }
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Buddies" 
        component={Buddies}
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="skiing-nordic" size={30} color={focused ? "#0096FF": "#D3D3D3"} />
              <Text style= {{fontSize: 13, color: "black"}}>BUDDIES</Text>
            </View>
            )
          }
          }} 
        />
        <Tab.Screen 
        name="Weather" 
        component={Weather}
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <MaterialCommunityIcons name="snowflake-alert" size={30} color={focused ? "#0096FF": "#D3D3D3"} />
              <Text style= {{fontSize: 13, color: "black"}}>WEATHER</Text>
            </View>
            )
          }
          }} 
         />
        <Tab.Screen 
        name="Discover" 
        component={Discover}
          options = {{
            tabBarIcon: ({focused}) => {
              return (
                <View
                style= {{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#0096FF",
                  borderWidth: 3,
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 70 : 80,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 35 : 40
                }} >
                  <FontAwesome5 name="mountain" size={30} color={focused ? "#0096FF": "#D3D3D3"} />
                </View>
              )
            }
          }}
         />
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome name="user-o" size={30} color={focused ? "#0096FF": "#D3D3D3"}/>
              <Text style= {{fontSize: 13, color: "black"}}>PROFILE</Text>
            </View>
            )
          }
          }} 
        />
        <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="chat" size={30} color={focused ? "#0096FF": "#D3D3D3"} />
              <Text style= {{fontSize: 13, color: "black"}}>CHAT</Text>
            </View>
            )
          }
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

