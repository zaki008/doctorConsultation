import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, Font} from '../../../utils';
import Swipeable from 'react-native-swipeable';

const IsMe = ({text, date, onOpen, onClose, onDelete}) => {
  return (
    <Swipeable
      rightButtons={[
        <View style={styles.contentSwipe}>
          <TouchableOpacity style={[styles.rightSwipeItem]} onPress={onDelete}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>,
      ]}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Swipeable>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingRight: 16,
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 12,
    marginLeft: 12,
  },
  content: {
    backgroundColor: Colors.cardLight,
    padding: 12,
    paddingRight: 18,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  chat: {
    color: Colors.text.primary,
    fontFamily: Font.primary[400],
    fontSize: 14,
  },
  date: {
    color: Colors.text.secondary,
    fontSize: 11,
    fontFamily: Font.primary[400],
    marginTop: 8,
  },
  contentSwipe: {
    backgroundColor: Colors.error,
    padding: 12,
    paddingRight: 18,
    maxWidth: '80%',
    borderRadius: 10,
  },
  delete: {
    color: Colors.text.white,
    fontFamily: Font.primary[400],
    fontSize: 14,
  },
});
