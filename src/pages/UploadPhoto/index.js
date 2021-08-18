import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IcBtnAddPhoto, IlUserPhotoNull, IcRemovePhoto} from '../../assets';
import {Header, Button, Link, Gap} from '../../components';
import {Colors, Font, showError, storeData} from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(IlUserPhotoNull);
  const {fullName, job, uid} = route.params;
  const [photoForDb, setPhotoForDb] = useState('');
  const getImage = () =>{
   launchImageLibrary(
     {quality:0.6 ,maxHeight:200, maxWidth:200, includeBase64:true}
     ,response => {
      if (response.didCancel || response.error) {
        showError('Sepertinya Anda tidak memilih foto ya');
      } else {
        setPhotoForDb(
          `data:${response.assets[0].type};base64, 
          ${response.assets[0].base64}`,
        );
        const photoSource = {uri: response.assets[0].uri};
        setPhoto(photoSource);
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    Fire.database().ref(`user/${uid}/`).update({photo: photoForDb});
    const data = route.params;

    data.photo = photoForDb;
    storeData('user', data);
    navigation.replace('MainBottomNavigate');
  };

  return (
    <View style={styles.register}>
      <Header title={'Upload Photo'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapperAvatar} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto && <IcBtnAddPhoto style={styles.btnPlus} />}
            {hasPhoto && <IcRemovePhoto style={styles.btnPlus} />}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>{fullName}</Text>
          <Gap height={4} />
          <Text style={styles.job}>{job}</Text>
          <View />
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            textAlign={'center'}
            size={16}
            onPress={() => navigation.replace('MainBottomNavigate')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  register: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperAvatar: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  btnPlus: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    marginTop: 8,
    fontSize: 24,
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
  },
  job: {
    fontSize: 18,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
});
