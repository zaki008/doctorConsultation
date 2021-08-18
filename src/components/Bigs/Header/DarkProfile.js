import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Button } from '../../../components';
import { Colors, Font } from '../../../utils';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-light'} onPress={onPress} />
      <View style={styles.infoDoctor}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.photos} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 60,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
  },
  infoDoctor: {
    flex: 1,
  },
  name: {
    textAlign: 'center',
    color: Colors.text.white,
    fontFamily: Font.primary[600],
    fontSize: 22,
    textTransform: 'capitalize',
  },
  desc: {
    textAlign: 'center',
    marginTop: -2,
    color: Colors.text.subTitle,
    fontFamily: Font.primary[400],
    fontSize: 14,
    textTransform: 'capitalize',
  },
  photos: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
