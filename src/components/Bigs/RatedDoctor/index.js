import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { IcStar } from '../../../assets';
import { Font, Colors } from '../../../utils';

const RatedDoctor = ({onPress, name, avatar, desc}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.photos} />
      <View style={styles.infoProfile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  photos: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  infoProfile: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontFamily: Font.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
  },
  category: {
    fontFamily: Font.primary[400],
    fontSize: 12,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
  rate: {
    flexDirection: 'row',
  },
});
