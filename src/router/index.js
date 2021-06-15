import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Login, Register, Splash } from '../pages';

const stack = createStackNavigator();

const Router = () =>{
    return (
      <stack.Navigator initialRouteName="splash">
        <stack.Screen
          name="splash"
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
      </stack.Navigator>
    );
};

export default Router;
