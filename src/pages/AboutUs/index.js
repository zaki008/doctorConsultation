import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import { IcFacebook, IcInstagram, IcTwitter, IlLogo } from '../../assets';
import { Colors, Font } from '../../utils';
import { Gap } from '../../components';

const AboutUs = () => {
    return (
      <View style={styles.page}>
        <ImageBackground style={styles.bg}>
          <Text style={styles.title}>Tentang Kami</Text>
          <IlLogo style={styles.logo} />
        </ImageBackground>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>
              Konsultasi Dokter merupakan suatu pertemuan antara dokter dengan
              pasien untuk membahas masalah Kesehatan yang dialami oleh pasien,
              sedangkan chatting merupakan bentuk komunikasi untuk saling
              bertukar informasi dalam bentuk text pada suatu program aplikasi
              dengan menggunakan internet.
            </Text>
            <Gap height={30} />
            <Text style={styles.sosmed}>Sosial Media Kami</Text>
            <Gap height={10} />
            <View style={styles.itemImage}>
              <IcInstagram />
              <Text style={styles.name}>doctorConsultation</Text>
            </View>
            <View style={styles.itemImage}>
              <IcFacebook />
              <Text style={styles.name}>@doctor_Consultation</Text>
            </View>
            <View style={styles.itemImage}>
              <IcTwitter />
              <Text style={styles.name}>@doctorConsultation</Text>
            </View>
            <Gap height={30} />
          </ScrollView>
        </View>
      </View>
    );
};

export default AboutUs;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    height: 200,
    backgroundColor: '#95B2BF',
    alignItems:'center',
  },
  logo: {
    marginTop:20,
  },
  title: {
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
    fontFamily: Font.primary[600],
    color: Colors.text.white,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  text: {
    lineHeight: 30,
    fontSize: 12,
    color: Colors.text.secondary,
  },
  sosmed: {
    fontFamily: Font.primary[600],
    fontSize: 18,
    color: Colors.text.primary,
  },
  itemImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:12,
  },
  name:{
    fontSize: 14,
    color: Colors.text.secondary,
    fontFamily: Font.primary[600],
    marginLeft: 8,
  },
});
