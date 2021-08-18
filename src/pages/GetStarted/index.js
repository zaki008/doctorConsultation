import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { IlGetStarted, IlLogo } from '../../assets';
import { Button, Gap } from '../../components';
import {Font, Colors} from '../../utils';

const GetStarted = ({navigation}) => {
    return (
      <ImageBackground source={IlGetStarted} style={styles.getStarted}>
        <View>
          <IlLogo />
          <Text style={styles.title}>
            Konsultasi kesehatan anda dengan dokter pilihanmu sekarang
          </Text>
        </View>
        <View>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
          />
          <Gap height={16} />
          <Button
            type={'secondary'}
            title={'Sign In'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
  getStarted: {
    padding: 40,
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginTop: 91,
    color: Colors.text.white,
    fontFamily: Font.primary[600],
    maxWidth: 320,
    lineHeight: 45,
  },
});
