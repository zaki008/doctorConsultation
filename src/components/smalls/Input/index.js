import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import {Colors, Font} from '../../../utils';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  type,
}) => {
  const [border, setBorder] = useState(Colors.border.primary);
  const OnFocusForm = () => {
    setBorder(Colors.border.secondary);
  };
  const OnBlurForm = () => {
    setBorder(Colors.border.primary);
  };

  if (type === 'updateProfile') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.inputUpdate(border)}
          onFocus={OnFocusForm}
          onBlur={OnBlurForm}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
        />
      </View>
    );
  }

  return (
    <View>
      <TextInput
        style={styles.input(border)}
        placeholder={label}
        placeholderTextColor={Colors.text.secondary}
        onFocus={OnFocusForm}
        onBlur={OnBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: border,
    color: Colors.text.primary,
    paddingBottom: 8,
    fontFamily: Font.primary[400],
  }),
  label: {
    fontFamily: Font.primary[500],
    fontSize: 16,
    marginBottom: 6,
  },
  inputUpdate: border => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    color: Colors.text.primary,
    padding: 8,
    fontFamily: Font.primary[400],
  }),
});
