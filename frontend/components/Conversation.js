import React, {useState, useEffect} from "react";
import { Avatar, Bubble, GiftedChat, InputToolbar, Composer } from 'react-native-gifted-chat';
import { View, Text, StyleSheet } from "react-native";

export default function Conversation() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            { //Dummie values
                _id: 1,
                text: "Hello developer!",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde4.jpeg"),
                },
            }, {
                    _id: 2,
                    text: "Hi there!",
                    createdAt: new Date(),
                    user: {
                      _id: 1,
                      name: "User",
                      avatar: require("/Users/sigurdhagen/Documents/SkiBuddies/SkiBuddies/frontend/Bilder/bilde13.jpeg"),
                    },
            },
        ]);
    }, [])

    const onSend = (NewMessages = []) => {
        setMessages((prevMessage) => GiftedChat.append(prevMessage, NewMessages));
    };

    const renderBubble = (props) => {
        return (
        <View>
            <Bubble {...props}
            wrapperStyle={{
                left: { backgroundColor: "#D3D3D3" },
                right: { backgroundColor: "#0096FF" },
            }}/>
        </View>
        )
    }

    const renderSend = (props) => {
      const { text } = props;
    return (
      <View style={styles.sendContainer}>
        <Text
          style={styles.sendText}
          onPress={() => {
            const message = [{ text, user: props.user }];
            onSend(message);
          }}
        >
          Send
        </Text>
      </View>
    );
  };

    const renderInputToolbar = (props) => {
        return (
          <InputToolbar
            {...props}
            containerStyle={styles.inputToolbarContainer}
            
          />
        );
      };
    
      const renderComposer = (props) => {
        return (
          <View style={styles.composerContainer}>
          <Composer
            {...props}
            textInputStyle={styles.composerTextInput}
            placeholderTextColor="#D3D3D3"
          />
          </View>
        );
      };

    return (
        <View style={styles.container}>
        <GiftedChat
        messages={messages}
        onSend={(NewMessages) => onSend(NewMessages)}
        user={{
            _id: 1, //This sets how is "me"
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        listViewProps={{
            style: styles.listView,
          }}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    inputToolbarContainer: {
        borderTopWidth: 1,
        borderTopColor: "#0096FF",
        paddingHorizontal: 8,
        paddingVertical: 12,
      },
      composerTextInput: {
        fontSize: 16,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: "#F4F4F4",
        bottom: 7,
      },
      listView: {
        marginBottom: 40
      },
      sendContainer: {
          alignSelf: "flex-end",
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 5
        },
        sendText: {
          color: "#0096FF",
          fontWeight: "bold",
          fontSize: 18
        },
        composerContainer: {
          flex: 1
        },
})