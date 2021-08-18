/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Header, List} from '../../components';
import { Fire } from '../../config';
import { Colors } from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const doctorCategory = route.params;

  useEffect(() => {
    ListDoctorybyCategory(doctorCategory.category);
  }, [doctorCategory.category]);

  ListDoctorybyCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category.toLowerCase())
      .once('value')
      .then(result => {
        if (result.val()) {
        const oldData = result.val();
        const data = [];
        Object.keys(oldData).map((keys)=>{
          data.push({
            id: keys,
            data: oldData[keys],
          });
        });
        setListDoctor(data);
      }
      });
    };
  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${doctorCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        {listDoctor.map(doctor => {
          return (
            <List
              key={doctor.id}
              profile={{uri: doctor.data.photo}}
              name={doctor.data.fullName}
              desc={doctor.data.gender}
              type={'next'}
              onPress={() => navigation.navigate('DoctorProfile', doctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    padding: 16,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -30,
  },
});
