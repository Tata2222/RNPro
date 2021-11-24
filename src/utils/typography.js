import {Platform, PixelRatio} from 'react-native';
import size from './sizes';

const scale = size.screenWidth / 360;

export function normalize(font) {
  const newSize = font * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const Typography = {
  smallFontSize: {fontSize: normalize(11)},
  extraSmallFontSize: {fontSize: normalize(9)},
  smallMediumFontSize: {fontSize: normalize(12)},
  mediumFontSize: {fontSize: normalize(14)},
  fontSize15: {fontSize: normalize(15)},
  radioFontSize: {fontSize: normalize(18)},
  largeFontSize: {fontSize: normalize(20)},
  titleFontSize: {fontSize: normalize(24)},
  subtitleFontSize: {fontSize: normalize(18)},
  baseFontSize: {fontSize: normalize(16)},

  light: {fontFamily: 'Roboto-Light'},
  regular: {fontFamily: 'Roboto-Regular'},
  bold: {fontFamily: 'Roboto-Bold'},
  intro: {fontFamily: 'ProximaNova-Regular'},
};

export const button = {
  lineHeight: 35,
  ...Typography.regular,
  ...Typography.baseFontSize,
};
export const smallButton = {
  lineHeight: 25,
  ...Typography.regular,
  fontSize: normalize(12),
};

export const content = {
  ...Typography.baseFontSize,
};
