import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Font} from '../../../utils';
import {Gap, Button} from '../../../components';
import DarkProfile from './DarkProfile';
import PlainHeader from './PlainHeader';

const Header = ({onPress, title, type, desc, photo, kind, jenis}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile onPress={onPress} title={title} desc={desc} photo={photo} />
    );
  }
  if (type === 'plain-header') {
    return (
      <PlainHeader
        onPress={onPress}
        title={title}
        desc={desc}
        photo={photo}
        jenis={jenis}
      />
    );
  }
  if (kind === 'not-icon') {
    return (
      <View style={styles.notIcon}>
        <Text style={styles.titleNotIcon}>{title}</Text>
        <Gap width={24} />
      </View>
    );
  }
  return (
    <View style={styles.header(type)}>
      <Button
        type={'icon-only' || 'not-icon'}
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: type => ({
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: type === 'dark' ? 50 : 30,
    backgroundColor: type === 'dark' ? Colors.secondary : Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: type => ({
    fontFamily: Font.primary[600],
    fontSize: 20,
    color: type === 'dark' ? Colors.text.white : Colors.text.primary,
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  }),
  notIcon: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleNotIcon: {
    fontFamily: Font.primary[600],
    fontSize: 20,
    color: Colors.text.white,
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
