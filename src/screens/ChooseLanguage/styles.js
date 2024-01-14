import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../configs';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  boldText: {
    fontWeight: fontWeight.header,
    fontSize: fontSize.header,
  },
  subText: {
    fontSize: fontSize.normal,
    fontWeight: fontWeight.subHeader,
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
