import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {createHabbit} from '../../redux/habbits/actions';

export const HabbitsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  console.log('habbits');
  return (
    <View style={styles.container}>
      <Text style={styles.menuItem}>Create new habbit</Text>
      <Button
        title="Create"
        onPress={() => {
          dispatch(createHabbit({habbitName: 'first'}));
        }}
      />
    </View>
  );
};
