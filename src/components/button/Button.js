import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export const Button = ({title, style = {}, textStyle = {}, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
