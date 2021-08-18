import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Colors, Font } from '../../../utils';

const Loading = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.spinner} size="large"  color= {Colors.primary} />
        <Text style={styles.text}>Loading</Text>
      </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.bgLoading,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      fontSize: 16,
      fontFamily: Font.primary[600],
      color: Colors.text.loading,
      marginTop: 12,
  },
});
