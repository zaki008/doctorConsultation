import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, getData, showError} from '../../utils';
import {Header, List, Profile, Gap} from '../../components';
import { IlUserPhotoNull } from '../../assets';
import {Fire} from '../../config';

const UserProfile = ({navigation}) => {

  const [profile, setProfile] = useState({
    fullName:'',
    job: '',
    photo: IlUserPhotoNull,
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('user').then(result => {
        const data = result;
        data.photo = result?.photo?.length > 1 ? {uri: result.photo} : IlUserPhotoNull;
        setProfile(result);
      });
    });
  }, [navigation]);

  const logout = () =>{
    Fire.auth().signOut().then(()=> {
      navigation.replace('GetStarted');
    }).catch((error)=>{
      showError(error.message);
    });
  };

  return (
    <View style={styles.userProfile}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        {profile.fullName.length > 0 && (
          <Profile name={profile.fullName} desc={profile.job} photo={profile.photo} />
        )}
        <Gap height={30} />
        <List
          name="Edit Profile"
          desc="Perbarui Profile Anda jika Perlu"
          type="Next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <List
          name="Logout"
          desc="Sampai Jumpa Lagi"
          type="Next"
          icon="rate"
          onPress={logout}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  userProfile:{
      flex: 1,
      backgroundColor: Colors.white,
  },
  content:{
    padding: 16,
    paddingTop: 0,
  },
});
