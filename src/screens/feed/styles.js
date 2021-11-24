import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-evenly',
  },
  cards: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 10,
    zIndex: 100,
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    right: 10,
    left: 10,
    zIndex: 102,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
});
