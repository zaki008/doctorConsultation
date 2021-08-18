import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Font} from '../../../utils';
import Swipeable from 'react-native-swipeable';

const Other = ({text, date, photo, onOpen, onClose, onDelete}) => {
  return (
    <Swipeable
      leftButtons={[
        <View style={styles.swipeable}>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>,
      ]}
      onLeftButtonsOpenRelease={onOpen}
      onLeftButtonsCloseRelease={onClose}>
      <View style={styles.container}>
        <Image source={photo} style={styles.avatar} />
        <View style={styles.width}>
          <View style={styles.chatContent}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingLeft: 16,
    alignItems: 'flex-end',
    marginBottom: 16,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2},
  width: {maxWidth: '70%'},
  chatContent: {
    backgroundColor: Colors.primary,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: Colors.text.white,
    fontFamily: Font.primary[400],
    fontSize: 14,
  },
  date: {
    color: Colors.text.secondary,
    fontSize: 11,
    fontFamily: Font.primary[400],
    marginTop: 8,
    paddingLeft: 8,
  },
  swipeable: {
    alignItems: 'flex-end',
    backgroundColor: Colors.error,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
  },
  delete: {
    color: Colors.text.white,
    fontFamily: Font.primary[400],
    fontSize: 14,
  },
});
