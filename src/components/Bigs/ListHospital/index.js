import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, Font } from '../../../utils';

const ListHopital = ({type, name, address, images, onPress}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={images} style={styles.images} />
        <View style={styles.wrapper}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default ListHopital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.border.primary,
    borderRadius: 20,
    marginBottom: 16,
  },
  images: {
    width: 90,
    height: 70,
    borderRadius: 12,
  },
  wrapper: {
    paddingLeft: 16,
  },
  type: {
    fontSize: 16,
    fontFamily: Font.primary[400],
    color: Colors.text.primary,
  },
  title: {
    marginTop: -4,
    fontSize: 16,
    fontFamily: Font.primary[400],
    color: Colors.text.primary,
  },
  address: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: Font.primary[300],
    color: Colors.text.secondary,
  },
});
