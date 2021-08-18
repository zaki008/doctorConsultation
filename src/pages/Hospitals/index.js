import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {IlHospital} from '../../assets';
import {ListHopital} from '../../components';
import { Fire } from '../../config';
import {Colors, Font} from '../../utils';

const Hospitals = ({navigation}) => {

  const [hospitals, setHospitals] = useState([]);

  useEffect(()=>{
    Fire.database().ref('hospitals/').once('value')
    .then((result)=>{
      if (result.val()){
        const data = result.val();
        const filterData = data.filter(el => el !== null);
        console.log(filterData);
        setHospitals(filterData);
      }
    }).catch((error)=>{
      showMessage(error.showMessage);
    });
  }, []);

  return (
    <ScrollView style={styles.page}>
      <View>
        <ImageBackground source={IlHospital} style={styles.background}>
          <Text style={styles.title}>Informasi Rumah Sakit</Text>
          <Text style={styles.available}>{`${hospitals.length} Rumah Sakit`}</Text>
        </ImageBackground>
        <View style={styles.content}>
          {hospitals.map((hospital)=>{
            return (
               <ListHopital
                  key={hospital.id}
                  images={{uri: hospital.image}}
                  type={hospital.type}
                  name={hospital.name}
                  address={hospital.address}
                  onPress={() => navigation.navigate('DetailHospital', hospital)}
                />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    padding: 16,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  background: {
    height: 240,
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    fontSize: 24,
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
  },
  available: {
    fontSize: 16,
    fontFamily: Font.primary[500],
    color: Colors.text.primary,
  },
});
