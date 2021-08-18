import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  Gap,
} from '../../components';
import { Colors, Font, getData, showError} from '../../utils';
import {Fire} from '../../config';
import { IlUserPhotoNull } from '../../assets';

const Doctor = ({navigation}) => {
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [topDoctors, setTopDoctors] = useState([]);
  const [profile, setProfile] = useState({
    photo: IlUserPhotoNull,
    fullName: '',
    job: '',
  });

  useEffect(() => {
    categoryDoctorDB();
    topRatedDoctors();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const topRatedDoctors = () =>{
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(result => {
        if (result.val()) {
          const oldData = result.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
            setTopDoctors(data);
          });
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

  const categoryDoctorDB = () => {
     Fire.database()
       .ref('category_doctor/')
       .once('value')
       .then(result => {
         if (result.val()) {
           const data = result.val();
           const filterData = data.filter(el => el !== null);
           setCategoryDoctor(filterData);
         }
       })
       .catch(error => {
         showError(error.message);
       });
  };

   const getUserData = () => {
     getData('user').then(result => {
       const data = result;
       data.photo = result?.photo?.length > 1
                    ? {uri: result.photo} : IlUserPhotoNull;
       setProfile(result);
     });
   };
  return (
    <View style={styles.doctor}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Gap height={30} />
            <Text style={styles.kosultasi}>
              Konsultasikan Kesehatanmu Dengan dokter Pilihanmu
            </Text>
          </View>
          <Gap height={32} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryDoctor.map(item => {
                  return (
                    <DoctorCategory
                      key={`category-${item.id}`}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Peringkat Dokter Terbaik</Text>
            <Gap height={16} />
            {topDoctors.map(doctor => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.category}
                  avatar={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}
            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  doctor: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  kosultasi: {
    fontFamily: Font.primary[600],
    color: Colors.text.primary,
    fontSize: 20,
    lineHeight: 30,
    maxWidth: 300,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontFamily: Font.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
  },
});
