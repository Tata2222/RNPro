import React, {useState} from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';
import Card from '../../components/card/Card';
import {profiles} from './profiles';
import {Heart, Close} from '../../components';
import CircleButton from '../../components/circleButton/CircleButton';
import {styles} from './styles';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {Value} = Animated;

const {width, height} = Dimensions.get('window');

export const FeedScreen = () => {
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const profile = profiles[index];

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      console.log(e, ctx);
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.cards}> */}
      {/* <Animated.View {...StyleSheet.absoluteFillObject}>
            <Card profile={profile} />
          </Animated.View> */}
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View>
          <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: 'yellow',
            }}
          />
        </Animated.View>
      </PanGestureHandler>
      {/* </View> */}
      <View style={styles.footer}>
        <CircleButton icon={Close} color="red" onPress={() => {}} />
        <CircleButton icon={Heart} color="red" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};
