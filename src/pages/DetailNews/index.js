import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components';
import { Colors, Font } from '../../utils';

const DetailNews = ({navigation, route}) => {
  const news = route.params;

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: news.image}} style={styles.bg} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header style={styles.header}
            type={'plain-header'}
            jenis={'date'}
            title={news.title}
            desc={news.date}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>{news.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailNews;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    height: 260,
  },
  content: {
    padding: 8,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -40,
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 16,
    fontFamily: Font.primary[400],
    color: Colors.text.primary,
    textAlign: 'justify',
    lineHeight: 30,
  },
});
