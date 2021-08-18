import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcAboutActive,
  IcHome,
  IcHomeActive,
  IcHospitalActive,
  IcHospitals,
  IcMessages,
  IcMessagesActive,
  IcNews,
  IcNewsActive,
  IcAbout,
} from '../../../assets';
import {Colors, Font} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Pesan') {
      return active ? <IcMessagesActive /> : <IcMessages />;
    }
    if (title === 'Rumah Sakit') {
      return active ? <IcHospitalActive /> : <IcHospitals />;
    }
    if (title === 'Berita'){
      return active ? <IcNewsActive /> : <IcNews />;
    }
    if (title === 'Tentang Kami'){
      return active ? <IcAboutActive /> : <IcAbout />;
    }
    return active ? <IcHomeActive /> : <IcHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    fontSize: 10,
    color: active ? Colors.text.menuActive : Colors.text.menuInactive,
    fontFamily: Font.primary[600],
    marginTop: 4,
  }),
});
