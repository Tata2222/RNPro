import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {styles} from './styles';

const CircleButton = ({icon, color, onPress}) => {
  return (
    <RectButton style={styles.circle} onPress={onPress}>
      {icon}
    </RectButton>
  );
};

export default CircleButton;
