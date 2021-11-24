import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components';
import {SCREENS} from '../../utils/constants/screen';

export const WellcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome</Text>
      <Button
        title="Sign In"
        style={{width: '100%', marginVertica: 14}}
        onPress={() => navigation.navigate(SCREENS.SIGNIN)}
      />
      <Button
        title="Sign Up"
        style={{width: '100%', marginVertica: 14}}
        onPress={() => navigation.navigate(SCREENS.SIGNUP)}
      />
    </View>
  );
};
