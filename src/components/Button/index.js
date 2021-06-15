import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: type => ({
    backgroundColor: type === 'secondary' ? '#ffff' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  title: type => ({
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
    textAlign: 'center',
  }),
});
