import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlLogo } from '../../assets';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('GetStarted');
    },3000);
  },[navigation]);

  return (
      <View style={styles.splash}>
          <IlLogo />
          <Text style={styles.title}>My Doctor</Text>
      </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#ffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#112340',
  },
});
