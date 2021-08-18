import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { IlLogin } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { Fire } from '../../config';
import {Font, Colors, UseForm, storeData, showError} from '../../utils';
import { useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = UseForm({
    email: '',
    password: '',
  });
  /* const [loading, setLoading] = useState(false); */
  //untuk merubah reducer
  const dispatch = useDispatch();

  const login = () => {
     dispatch({type: 'SET_LOADING', value: true});

     Fire.auth().signInWithEmailAndPassword(form.email, form.password).then((result)=> {
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database().ref(`user/${result.user.uid}/`).once('value')
        .then(resultDB => {
          if (resultDB.val()){
            storeData('user', resultDB.val());
            navigation.replace('MainBottomNavigate');
          }
        });
     }).catch((error)=>{
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
     });
  };
  return (
    <View style={styles.login}>
      <ImageBackground source={IlLogin} style={styles.bgLogin} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>Selamat Datang</Text>
          <Text style={styles.desc}>Masuk dan Konsultasi kesehatan anda</Text>
          <Gap height={30} />
          <Input
            label={'Email Address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={20} />
          <Input
            label={'Password'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={50} />
          <Button title={'Sign In'} onPress={login} />
          <Gap height={30} />
          <Link
            title={'Create New Account'}
            size={16}
            textAlign={'center'}
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bgLogin: {
    width: '100%',
    height: 180,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  welcome: {
    fontFamily: Font.primary[600],
    fontSize: 24,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  desc: {
    fontFamily: Font.primary[400],
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Font.primary[600],
    marginVertical: 40,
    maxWidth: 154,
    lineHeight: 24,
    color: Colors.text.primary,
  },
});
