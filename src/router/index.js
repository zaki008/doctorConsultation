import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  UploadPhoto,
  Doctor,
  Messages,
  Hospitals,
  ChooseDoctor,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
  News,
  DetailNews,
  DetailHospital,
  AboutUs,
} from '../pages';
import { BottomNavigation } from '../components';


const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainBottomNavigate = () =>{
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Beranda" component={Doctor} />
      <Tab.Screen name="Pesan" component={Messages} />
      <Tab.Screen name="Rumah Sakit" component={Hospitals} />
      <Tab.Screen name="Berita" component={News} />
      <Tab.Screen name="Tentang Kami" component={AboutUs} />
    </Tab.Navigator>
  );
};

const Router = () =>{
    return (
      <stack.Navigator initialRouteName="Splash">
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="MainBottomNavigate"
          component={MainBottomNavigate}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ChooseDoctor"
          component={ChooseDoctor}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Chatting"
          component={Chatting}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="DetailHospital"
          component={DetailHospital}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    );
};

export default Router;
