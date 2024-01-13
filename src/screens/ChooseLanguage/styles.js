import {StyleSheet} from 'react-native';
import {color} from '../../configs';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 20,
  },
  subText: {
    fontSize: 16,
    marginTop: 8,
    color: color.grayText,
  },
  buttonContainer: {
    marginTop: 108,
  },
  buttonMargin: {
    marginBottom: 24,
  },
});
