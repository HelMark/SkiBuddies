import { Text, Platform, View, TouchableOpacity } from "react-native";
import { Buddies, Discover, Profile, Chat, Weather } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import FriendsFeed from "./screens/FriendsFeed";
import Conversation from './components/Conversation';
import NewPost from "./screens/NewPost";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 90,
    background: "#fff",
  },
};

const screenNames = {
  Buddies: "Buddies",
  Weather: "Weather",
  Discover: "Discover",
  Profile: "Profile",
  Chat: "Chat",
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, headerLeft: null}}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={AppTabs}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="FriendsFeed" component={FriendsFeed}
          options={() => ({
            headerShown: false
          })}/>
        <Stack.Screen  name = "NewPost" component={NewPost}
        options={() => ({
          headerShown: false
        })}/>
        <Stack.Screen name="Conversation" component={Conversation} 
          options={({navigation, route}) => ({
          headerShown: true,
          
          title: route.params?.conversationName || "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
