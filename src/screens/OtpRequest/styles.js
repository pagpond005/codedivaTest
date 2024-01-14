import {StyleSheet} from 'react-native';
import {color, fontSize, fontWeight} from '../../configs';

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
    fontWeight: fontWeight.header,
    textAlign: 'center',
  },
  telText: {
    marginTop: 24,
    marginBottom: 60,
    color: color.main,
    fontWeight: fontWeight.subHeader,
    fontSize: fontSize.header,
    textAlign: 'center',
  },
  subText: {
    marginTop: 24,
    color: color.grayText,
    fontSize: fontSize.subText,
    textAlign: 'center',
  },
  imgStyle: {
    width: 120,
    height: 120,
    marginBottom: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export {styles};
