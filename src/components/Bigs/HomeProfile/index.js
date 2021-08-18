import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Font} from '../../../utils';

const HomeProfile = ({onPress, profile}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.job}>{profile.job}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  userInfo: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    marginTop: -2,
    fontSize: 12,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
});
