import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Font} from '../../../utils';

const Link = ({title, size, textAlign, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, textAlign)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (size, textAlign) => ({
    fontFamily: Font.primary[400],
    fontSize: size,
    textDecorationLine: 'underline',
    color: Colors.text.secondary,
    textAlign: textAlign,
  }),
});
