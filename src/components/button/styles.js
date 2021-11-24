import {StyleSheet} from 'react-native';
import {Color} from '../../utils/colors';
import {Typography, smallButton} from '../../utils/typography';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black,
    shadowColor: Color.black,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
    elevation: 5,
    marginVertical: 14,
  },
  text: {
    ...Typography.smallMediumFontSize,
    ...Typography.bold,
    textTransform: 'uppercase',
    color: Color.white,
  },
});
