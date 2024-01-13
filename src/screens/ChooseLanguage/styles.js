import {StyleSheet} from 'react-native';
import {color} from '../../configs';
import {fontSize} from '../../configs/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  boldText: {
    fontWeight: '600',
    fontSize: fontSize.header,
  },
  subText: {
    fontSize: fontSize.normal,
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
