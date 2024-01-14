import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  containerContent: {
    flex: 0.7,
  },
  headerText: {
    fontSize: fontSize.header,
    fontWeight: '600',
    textAlign: 'center',
  },
  telText: {
    marginTop: 24,
    marginBottom: 48,
    color: color.main,
    fontWeight: '600',
    fontSize: fontSize.header,
    textAlign: 'center',
  },
  subText: {
    marginTop: 24,
    color: color.grayText,
    fontSize: fontSize.subText,
    textAlign: 'center',
  },
  iconView: {
    alignItems: 'center',
    marginBottom: 60,
  },
});

export {styles};