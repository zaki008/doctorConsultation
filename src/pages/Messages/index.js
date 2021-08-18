import React, {useEffect} from 'react';
import { useState } from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { DummyDoctor2, DummyDoctor3, DummyDoctor4 } from '../../assets';
import {List, Header} from '../../components';
import { Fire } from '../../config';
import { Colors, getData } from '../../utils';

const Messages = ({navigation}) => {
  const [doctors, setDoctor] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor3,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor2,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);

  const warn = console.warn;

   function logWarning(...warnings) {
     let showWarning = true;
     warnings.forEach(warning => {
       if (warning.includes('UNSAFE_')) {
         showWarning = false;
       } else if (warning.includes('SourceMap')) {
         showWarning = false;
       } else if (warning.includes('DevTools')) {
         showWarning = false;
       }
     });
     if (showWarning) {
       warn(...warnings);
     }
   }
  console.warn = logWarning;
  const getDataUserLocal = () => {
    getData('user').then((result)=>{
      setUser(result);
    });
  };

  useEffect(()=>{
    getDataUserLocal();
    const urlHistory = `messages/${user.uid}/`;

    Fire.database().ref(urlHistory).on('value',
    async (snapshoot)=>{
      if (snapshoot.val()){
        const oldData = snapshoot.val();
        const data = [];
          const promises = await Object.keys(oldData)
                          .map(async(key)=>{
          const urlUidDoctor = `doctors/${oldData[key]
                          .uidPartner}`;
          const detailDoctor = await Fire.database().ref()
                        .child(urlUidDoctor).once('value');

          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        setHistory(data);
      }
    });
  }, [user.uid]);

   const onDelete = (key) => {
     Fire.database()
       .ref(`messages/${user.uid}/${key}`)
       .remove();
   };


  return (
    <View style={styles.container}>
      <Header
        title="Pesan"
        kind={'not-icon'}
        onPress={() => navigation.goBack()}
      />
        <ScrollView style={styles.content}>
          {history.map(chat => {
            const doctor = {
              id: chat.detailDoctor.id,
              data: chat.detailDoctor,
            };
            return (
              <List
                fadeIn
                kind={'messages'}
                key={chat.id}
                profile={{uri: chat.detailDoctor.photo}}
                name={chat.detailDoctor.fullName}
                desc={chat.lastContentChat}
                onPress={() => navigation.navigate('Chatting', doctor)}
                onDelete={() => onDelete(chat.id)}
              />
            );
          })}
        </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
});
