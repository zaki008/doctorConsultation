import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import { Colors, Font } from '../../../utils';
import {Button} from '../../../components';

const InputChat = ({value, onChangeText, targetChat, onButtonPress}) => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={`Tulis Pesan Untuk ${targetChat.data.fullName}`}
          value={value}
          onChangeText={onChangeText}
        />
        <Button
          type={'btn-icon-send'}
          disable={value.length < 1}
          onPress={onButtonPress}
        />
      </View>
    );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  input: {
    padding: 12,
    backgroundColor: Colors.disable,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: Font.primary[400],
    maxHeight: 45,
    color: Colors.text.primary,
  },
});
