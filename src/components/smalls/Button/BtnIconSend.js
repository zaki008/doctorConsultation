import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {IcSendDisable, IcSendEnable} from '../../../assets';
import { Colors } from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IcSendDisable />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IcSendEnable />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    backgroundColor: disable ? Colors.disable : Colors.enable,
    width: 45,
    height: 45,
  }),
});
