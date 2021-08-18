import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Colors, Font } from '../../../utils';

const NewsItem = ({title, date, image, content, onPress}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
          <Image source={{uri: image}} style={styles.images} />
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>
              {content.length < 20 ? content : content.substring(0, 20) + '...'}
            </Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: Colors.border.primary,
    marginBottom: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  images: {
    width: 90,
    height: 70,
    borderRadius: 10,
  },
  info: {
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
    marginBottom: 2,
  },
  content: {
    fontSize: 12,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
    maxWidth: 255,
  },
  date: {
    marginTop: -2,
    fontSize: 11,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
  },
});
