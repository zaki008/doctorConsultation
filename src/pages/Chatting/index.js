import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {Colors, Font, getData, getChatTime, getDateChat} from '../../utils';
import {Fire} from '../../config';
import { showMessage } from 'react-native-flash-message';

const Chatting = ({navigation, route}) => {
  const doctor = route.params;
  const [chatContent, setChatContent] = useState(' ');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  const getDataUserFromLocal = () => {
    getData('user').then(result => {
      setUser(result);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
     const chatID = `${user.uid}_${doctor.data.uid}`;
     const urlChatFirebase = `chatting/${chatID}/allChat/`;

     Fire.database()
       .ref(urlChatFirebase)
       .on('value', snapshoot => {
         if (snapshoot.val()){
          const dataSnapshoot = snapshoot.val();
          const allDataChat = [];
          Object.keys(dataSnapshoot).map((key)=>{
            const dataChat = dataSnapshoot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat)=>{
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
         }
       });
  }, [user.uid, doctor.data.uid]);

  const sendChat = () =>{
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const chatID = `${user.uid}_${doctor.data.uid}`;
    const urlChatFirebase = `chatting/${chatID}/allChat/${getDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${doctor.data.uid}/${chatID}`;
    const DataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor.data.uid,
    };
    const DataHistoryChatFordoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Fire.database()
      .ref(urlChatFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        //set history for user
        Fire.database().ref(urlMessageUser).set(DataHistoryChatForUser);
        //set history for doctor
        Fire.database().ref(urlMessageDoctor).set(DataHistoryChatFordoctor);
      })
      .catch(error => {
        showMessage(error.message);
      });
  };

  const onDelete = (date, key) =>{
    const chatID = `${user.uid}_${doctor.data.uid}`;
    Fire.database()
      .ref(`chatting/${chatID}/allChat/${date}/${key}`)
      .remove();
  };
  return (
    <View style={styles.page}>
      <Header
        type={'dark-profile'}
        title={doctor.data.fullName}
        desc={doctor.data.profession}
        photo={{uri: doctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map(dateChat => {
            return (
              <View style={styles.content} key={dateChat.id}>
                <Text style={styles.date}>{dateChat.id}</Text>
                {dateChat.data.map(chat => {
                  const isMe = chat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={chat.id}
                      isMe={isMe}
                      text={chat.data.chatContent}
                      date={chat.data.chatTime}
                      photo={isMe ? null : {uri: doctor.data.photo}}
                      onDelete={() => onDelete(dateChat.id, chat.id)}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={sendChat}
        targetChat={doctor}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -30,
  },
  content: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
    paddingVertical: 20,
    textAlign: 'center',
  },
});
