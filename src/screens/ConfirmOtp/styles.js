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
  bottomText: {
    fontSize: fontSize.normal,
    color: color.grayText,
    textAlign: 'center',
    marginTop: 48,
  },
  resendText: {
    fontSize: fontSize.normal,
    fontWeight: fontWeight.subHeader,
    color: color.main,
    textAlign: 'center',
  },
  marginTop8: {
    marginTop: 8,
  },
  otpStyle: {
    width: '100%',
    height: 200,
  },
  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: color.gray,
    color: color.black,
    fontSize: fontSize.header,
  },
  timerContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
