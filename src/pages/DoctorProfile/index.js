import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import { Colors } from '../../utils';

const DoctorProfile = ({navigation, route}) => {
    const doctor = route.params;
    return (
      <View style={styles.doctorProfile}>
        <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Profile
              name={doctor.data.fullName}
              desc={doctor.data.profession}
              photo={{uri: doctor.data.photo}}
            />
            <Gap height={10} />
            <ProfileItem label={'Alumnus'} value={doctor.data.university} />
            <ProfileItem
              label={'Tempat Praktik'}
              value={doctor.data.hospital_address}
            />
            <ProfileItem label={'No. STR Dokter'} value={doctor.data.str_number} />
            <ProfileItem
              type = {'time'}
              label={'Waktu Konsultasi'}
              valueOne={doctor.data.weekday}
              valueTwo={doctor.data.weekend}
            />
            <View style={styles.action}>
              <Button
                title="Start Consultation"
                onPress={() => navigation.navigate('Chatting', doctor)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  doctorProfile:{
      flex: 1,
      backgroundColor: Colors.white,
  },
  content:{
    padding: 16,
    paddingTop: -20,
  },
  action:{
      paddingHorizontal:40,
      paddingTop: 20,
  },
});
