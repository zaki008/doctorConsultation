import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Input, Gap, Button} from '../../components';
import {Font, Colors, UseForm, storeData, showError} from '../../utils';
import {IlLogin} from '../../assets';
import { Fire } from '../../config';
import { useDispatch } from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = UseForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const onContinue = () => {

    if (form.fullName === ''){
      showError('Nama Lengkap Harus Diisi');
    } else if (form.job === ''){
      showError('Pekerjaan Harus Diisi');
    } else {
      dispatch({type: 'SET_LOADING', value: true});
      Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(success => {
          dispatch({type: 'SET_LOADING', value: false});
          setForm('reset');

          const data = {
            fullName: form.fullName,
            job: form.job,
            email: form.email,
            uid: success.user.uid,
          };

          Fire.database().ref(`user/${success.user.uid}/`).set(data);

          console.log('data', data);
          storeData('user', data);
          navigation.navigate('UploadPhoto', data);
        })
        .catch(error => {
          dispatch({type: 'SET_LOADING', value: false});
          showError(error.message);
        });
    }
    };

  return (
    <View style={styles.Register}>
      <ImageBackground source={IlLogin} style={styles.bgLogin} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Daftar Akun</Text>
          <Text style={styles.desc}>Isi data diri anda untuk mendaftar </Text>
          <Gap height={20} />
          <Input
            label={'Nama Lengkap'}
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={16} />
          <Input
            label={'Pekerjaan'}
            value={form.job}
            onChangeText={value => setForm('job', value)}
          />
          <Gap height={16} />
          <Input
            label={'Email Address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <Input
            label={'Password'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={30} />
          <Button title={'Continue'} onPress={onContinue} />
          <Gap height={10} />
          <View style={styles.wrapper}>
            <Text style={styles.text}>Sudah punya akun ?</Text>
            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  Register: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bgLogin: {
    width: '100%',
    height: 160,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 40,
    paddingBottom:0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  title: {
    fontFamily: Font.primary[600],
    fontSize: 24,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  desc: {
    marginTop: -4,
    fontFamily: Font.primary[400],
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: Font.primary[400],
    fontSize: 16,
    color: Colors.text.secondary,
    marginRight: 20,
  },
  login: {
    borderWidth: 4,
    borderColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  loginText: {
    fontFamily: Font.primary[600],
    fontSize: 18,
    color: Colors.text.primary,
    textAlign: 'center',
  },
});
