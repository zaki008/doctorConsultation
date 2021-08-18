import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {Header, NewsItem} from '../../components';
import {Fire} from '../../config';
import {Colors, showError} from '../../utils';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(()=>{
      newsDB();
  }, []);

  const newsDB = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(result => {
        if (result.val()) {
          const data = result.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title={'Berita'} kind={'not-icon'} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                content={item.content}
                date={item.date}
                image={item.image}
                onPress={() => navigation.navigate('DetailNews', item)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  page:{
    backgroundColor: Colors.white,
    flex: 1,
  },
  content:{
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 16,
  },
});
