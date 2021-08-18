import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../../../components';
import {Colors, Font} from '../../../utils';

const PlainHeader = ({onPress, title, desc, photo, jenis}) => {
  if (jenis === 'date'){
     return (
       <View style={styles.container}>
         <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
         <View style={styles.infoDoctor}>
           <Text style={styles.name}>{title}</Text>
           <Text style={styles.desc}>{desc}</Text>
         </View>
         <Image source={photo} style={styles.photos} />
       </View>
     );
  }
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
      <View style={styles.infoDoctor}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.name}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.photos} />
    </View>
  );
};

export default PlainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  infoDoctor: {
    flex: 1,
  },
  name: {
    marginLeft: 10,
    textAlign: 'center',
    color: Colors.text.primary,
    fontFamily: Font.primary[600],
    fontSize: 18,
  },
  desc: {
    textAlign: 'center',
    marginTop: -2,
    color: Colors.text.secondary,
    fontFamily: Colors.text.subTitle,
    fontSize: 14,
  },
  photos: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
