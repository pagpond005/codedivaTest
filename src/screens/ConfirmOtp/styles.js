import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  containerContent: {
    flex: 0.85,
  },
  textHeader: {
    fontSize: fontSize.header,
    fontWeight: fontWeight.header,
  },
  subText: {
    marginTop: 12,
    fontSize: fontSize.normal,
    fontWeight: fontWeight.subHeader,
    color: color.grayText,
  },
  marginTop8: {
    marginTop: 8,
  },
});

export {styles};
