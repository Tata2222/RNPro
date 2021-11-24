import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../../utils/constants/screen';
import {WellcomeScreen} from '../../screens/wellcome';
import {SignInScreen} from '../../screens/signin';
import {SignUpScreen} from '../../screens/signup';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen
        name={SCREENS.WELCOME}
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.SIGNIN}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.SIGNUP}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
