import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button, TextCustomInput} from '../../components';
import {Formik} from 'formik';
import {RegisterSignUpSchema} from '../../utils/validation';

const initialValues = {userName: '', password: ''};

export const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSignUpSchema()}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <TextCustomInput
              placeholder={'nickname'}
              value={values.userName}
              onChangeText={handleChange('userName')}
            />
            <TextCustomInput
              placeholder={'password'}
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 14,
              }}>
              <Button
                title="Sign in"
                style={{width: '100%'}}
                onPress={() => {
                  //validateForm();
                  handleSubmit();
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
