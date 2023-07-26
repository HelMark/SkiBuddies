import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FriendsFeed from '../screens/FriendsFeed';
import Conversation from '../screens/Conversation';
import NewPost from '../screens/NewPost';
import AppTabs from './TabNavigator';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendsFeed"
        component={FriendsFeed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={({ navigation, route }) => ({
          headerShown: true,
          title: route.params?.conversationName || '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
