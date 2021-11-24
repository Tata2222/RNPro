import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button, TextCustomInput} from '../../components';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RegisterLoginSchema} from '../../utils/validation';

const initialValues = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
};

createAccount(
  firstName: String!
  lastName: String
  userName: String!
  email: String!
  password: String!
  ): MutationRequest!
  

export const SignUpScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled
      contentContainerStyle={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterLoginSchema()}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <TextCustomInput
              placeholder={'firstname'}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
            />
            <TextCustomInput
              placeholder={'lastname'}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            />
            <TextCustomInput
              placeholder={'username'}
              value={values.userName}
              onChangeText={handleChange('userName')}
            />
            <TextCustomInput
              placeholder={'email'}
              value={values.email}
              onChangeText={handleChange('email')}
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
                title="Sign up"
                style={{width: '100%'}}
                onPress={() => {
                  // validateForm();
                  handleSubmit();
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
