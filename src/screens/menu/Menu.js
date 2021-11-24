import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {Ball} from '../../components';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const Heart = <Icon name="heart" size={32} color="#900" />;
const Close = <AntDesignIcon name="close" size={32} color="#800" />;

export const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: 100,
          justifyContent: 'center',
        }}>
        {Heart}
        {Close}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Habbits');
        }}>
        <Text style={styles.menuItem}>Habbits</Text>
      </TouchableOpacity>
      <Text style={styles.menuItem}>Item2</Text>
    </View>
  );
};
