import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Font} from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

const Button = ({type, title, onPress, icon, disable}) => {
    if (type === 'btn-icon-send') {
      return <BtnIconSend disable={disable} onPress={onPress} />;
    }
    if (type === 'icon-only') {
      return <IconOnly icon={icon} onPress={onPress} />;
    }
    if (type === 'not-icon'){
      return <View />;
    }
    if (disable) {
      return (
        <View style={styles.bgDisable} >
          <Text style={styles.textDisable}>{title}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.button(type)} onPress={onPress}>
        <Text style={styles.title(type)}>{title}</Text>
      </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
  button: type => ({
    backgroundColor:
      type === 'secondary'
        ? Colors.button.secondary.backgroundColor
        : Colors.button.primary.backgroundColor,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  bgDisable: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.button.disable.backgroundColor,
  },
  textDisable: {
    fontFamily: Font.primary[600],
    fontSize: 18,
    textAlign: 'center',
    color: Colors.button.disable.text,
  },
  title: type => ({
    fontFamily: Font.primary[600],
    fontSize: 18,
    color:
      type === 'secondary'
        ? Colors.button.secondary.text
        : Colors.button.primary.text,
    textAlign: 'center',
  }),
});
