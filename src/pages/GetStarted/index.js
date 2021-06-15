import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { IlGetStarted, IlLogo } from '../../assets';
import { Button, Gap } from '../../components';

const GetStarted = ({navigation}) => {
    return (
      <ImageBackground source={IlGetStarted} style={styles.getStarted}>
        <View>
          <IlLogo />
          <Text style={styles.title}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
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
    backgroundColor: '#b0b0b0',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    paddingRight: 85,
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
  },
});
