import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { IlUserPhotoNull } from '../../assets';
import {Header, Profile, Button, Input, Gap} from '../../components';
import { Fire } from '../../config';
import { Colors, getData, showError, storeData } from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import { useDispatch } from 'react-redux';


const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    email: '',
    photo: IlUserPhotoNull,
    photoForDB: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(IlUserPhotoNull);

  const dispatch = useDispatch();

  useEffect(() => {
    getData('user').then((result)=>{
      const data = result;
       data.photoForDB =
         result?.photo?.length > 1 ? result.photo : IlUserPhotoNull;
       const tempPhoto = result?.photo?.length > 1 ? {uri: result.photo} : IlUserPhotoNull;
      setPhoto(tempPhoto);
      setProfile(data);
    });
  }, []);

  const update = () =>{
    if (profile.fullName === '') {
      showError('Nama Lengkap Harus Diisi');
    } else if (profile.job === '') {
      showError('Pekerjaan Harus Diisi');
    } else if (password.length > 0) {
      if (password.length < 6) {
        showError('Password anda kurang dari 6 karakter');
      } else {
        updatePassword();
        updateDataProfile();
      }
    } else {
      updateDataProfile();
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(error => {
          showError(error.message);
        });
      }
    });
  };

  const updateDataProfile = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const data = profile;
    data.photo = profile.photoForDB;
    Fire.database()
      .ref(`user/${profile.uid}/`)
      .update(data)
      .then(() => {
        dispatch({type: 'SET_LOADING', value: false});
        storeData('user', data)
          .then(() => {
            navigation.replace('MainBottomNavigate');
          })
          .catch(() => {
            showError('Terjadi Masalah');
          });
      })
      .catch(error => {
        showError(error.message);
      });
  };

  const onChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

   const getImage = () => {
     launchImageLibrary(
    {quality: 0.6, maxHeight: 200, maxWidth: 200,
      includeBase64: true},response => {
         if (response.didCancel || response.error) {
          showError('Sepertinya Anda tidak memilih Foto ya');
         } else {
           const photoSource = {uri: response.assets[0].uri};
           setProfile({
             ...profile,
             photoForDB: `data:${response.assets[0].type};base64, 
             ${response.assets[0].base64}`,
           });
           setPhoto(photoSource);
         }
       },
     );
   };

  return (
    <View style={styles.updateProfile}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input type={'updateProfile'} label="Nama Lengkap" value={profile.fullName} onChangeText={(value) => onChangeText('fullName', value)} />
          <Gap height={24} />
          <Input type={'updateProfile'} label="Pekerjaan" value={profile.job} onChangeText={(value) => onChangeText('job', value)} />
          <Gap height={24} />
          <Input type={'updateProfile'} label="Email" disable value={profile.email} style={styles.email}/>
          <Gap height={24} />
          <Input type={'updateProfile'} label="Password" value={password} onChangeText ={(value)=> setPassword(value)} secureTextEntry />
          <Gap height={40} />
          <Button
            title="Save Profile"
            onPress={update}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  updateProfile: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
