import {Text, Platform, View} from "react-native";
import {Home, Portfolio, Prices, Settings, Transaction} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


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
    height: 75,
    background: "#fff"
  }
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
              <Text style= {{fontSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
            )
          }
          }} 
        />
        <Tab.Screen 
        name="Portfolio" 
        component={Portfolio}
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="wallet" size={24} color={focused ? "#16247d": "#111"} />
              <Text style= {{fontSize: 12, color: "#16247d"}}>WALLET</Text>
            </View>
            )
          }
          }} 
         />
        <Tab.Screen 
        name="Transaction" 
        component={Transaction}
          options = {{
            tabBarIcon: ({focused}) => {
              return (
                <View
                style= {{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#16247d", 
                  width: Platform.OS == "ios" ? 60 : 70,
                  height: Platform.OS == "ios" ? 60 : 70,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 30 : 35
                }} >
                  <FontAwesome name="exchange" size={24} color="#fff" />
                </View>
              )
            }
          }}
         />
        <Tab.Screen 
        name="Prices" 
        component={Prices} 
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#16247d": "#111"} />
              <Text style= {{fontSize: 12, color: "#16247d"}}>PRICES</Text>
            </View>
            )
          }
          }} 
        />
        <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options= {{
          tabBarIcon: ({focused}) => {
            return (
            <View style= {{alignItems: "center", justifyContent: "center"}}>
              <Ionicons name="settings" size={24} color={focused ? "#16247d": "#111"}  />
              <Text style= {{fontSize: 12, color: "#16247d"}}>SETTINGS</Text>
            </View>
            )
          }
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

