import {StyleSheet} from 'react-native';
import {Color} from '../../utils/colors';
import {Typography} from '../../utils/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    ...Typography.largeFontSize,
    ...Typography.intro,
    ...Typography.bold,
    textTransform: 'uppercase',
    color: Color.black,
    marginBottom: 14,
  },
});
