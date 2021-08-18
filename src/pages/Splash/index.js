import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlLogo } from '../../assets';
import { Fire } from '../../config';
import { Colors, Font } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainBottomNavigate');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);


  return (
    <View style={styles.splash}>
      <IlLogo />
      <Text style={styles.title}>Doctor<Text style={styles.span}>Consultation</Text></Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Font.primary[600],
    marginTop: 20,
    color: Colors.text.primary,
  },
  span: {
    fontSize: 20,
    fontFamily: Font.primary[600],
    marginTop: 20,
    color: Colors.primary,
  },
});
