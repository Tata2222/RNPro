// @flow
import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
  },
  name: {
    color: 'black',
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#6ee3b4',
  },
  likeLabel: {
    fontSize: 32,
    color: '#6ee3b4',
    fontWeight: 'bold',
  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#ec5288',
  },
  nopeLabel: {
    fontSize: 32,
    color: '#ec5288',
    fontWeight: 'bold',
  },
});

const Card = ({profile}) => {
  console.log(profile);
  return (
    <View style={{...StyleSheet.absoluteFill}}>
      <Image style={styles.image} source={profile.path} />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Animated.View style={[styles.like, {opacity: 0.9}]}>
            <Text style={styles.likeLabel}>LIKE</Text>
          </Animated.View>
          <Animated.View style={[styles.nope, {opacity: 0.3}]}>
            <Text style={styles.nopeLabel}>NOPE</Text>
          </Animated.View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.name}>{profile.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
