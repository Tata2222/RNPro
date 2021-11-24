import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from '../AuthNavigator';
import {MainNavigator} from '../MainNavigator';
import {STACK} from '../../utils/constants/screen';
import {gql} from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

const Stack = createStackNavigator();
const isAuth = false;

export const LOGIN = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

export const RootNavigator = () => {
  const [login, {loading, error, data}] = useMutation(
    LOGIN,
    //   {
    //   onCompleted: data => console.log(data),
    // }
  );

  useEffect(() => {
    login({
      variables: {
        userName: 'Panda22',
        password: '123',
      },
    });
  }, []);

  console.log('data', data);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuth ? (
          <Stack.Screen
            name={STACK.AUTH}
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={STACK.MAIN}
            component={MainNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
