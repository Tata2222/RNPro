import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {styles} from './styles';

export const Ball = () => {
  const position = useRef(new Animated.ValueXY()).current;

  // useEffect(() => {
  //   Animated.spring(position, {
  //     toValue: {x: 0, y: -500},
  //   }).start();
  // });

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball}>
        <Text style={styles.text}>Hi</Text>
      </View>
    </Animated.View>
  );
};
