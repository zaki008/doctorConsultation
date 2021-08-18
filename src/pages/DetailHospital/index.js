import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Header, Gap} from '../../components';
import { Colors, Font } from '../../utils';

const DetailHospital = ({navigation, route}) => {
  const hospital = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: hospital.image}} style={styles.bg} />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            type={'plain-header'}
            title={hospital.type}
            desc={hospital.name}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.content}>
            <Text style={styles.text}>
              {hospital.content}
            </Text>
            <Gap height={30} />
            <Text style={styles.information}>Information</Text>
            <Gap height={16} />
            <Text style={styles.field}>
              {'Nama  :'} <Text style={styles.value}>{`${hospital.type} ${hospital.name}`}</Text>
            </Text>
            <Text style={styles.field}>
              {'Jenis  : '}
              <Text style={styles.value}>{hospital.kind}</Text>
            </Text>
            <Text style={styles.field}>
              {'Alamat  : '}
              <Text style={styles.value}>{hospital.address}</Text>
            </Text>
            <Text style={styles.field}>
              {'Provinsi  : '}
              <Text style={styles.value}>{hospital.province}</Text>
            </Text>
            <Text style={styles.field}>
              {'Didirikan  : '}
              <Text style={styles.value}>{hospital.founded}</Text>
            </Text>
            <Text style={styles.field}>
              {'Nomor Telpon  : '}
              <Text style={styles.value}>{hospital.phone}</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailHospital;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg: {
    height: 260,
  },
  wrapper: {
    padding: 8,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -50,
  },
  content: {
    paddingHorizontal: 16,
  },
  text: {
    marginTop: -10,
    fontSize: 12,
    fontFamily: Font.primary[400],
    color: Colors.text.secondary,
    textAlign: 'justify',
    lineHeight: 30,
  },
  information: {
    fontFamily: Font.primary[600],
    fontSize: 18,
    color: Colors.text.primary,
  },
  field: {
    fontFamily: Font.primary[500],
    fontSize: 14,
    color: Colors.text.primary,
    marginBottom: 10,
  },
  value: {
    fontFamily: Font.primary[400],
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 10,
  },
});
