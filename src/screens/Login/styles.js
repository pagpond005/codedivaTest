import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  containerMiddle: {
    flex: 0.6,
  },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    padding: 10,
    borderColor: color.gray,
  },
  marginBottom50: {
    marginBottom: 50,
  },
  containerCheckboxLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 36,
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGray: {
    color: color.grayText,
  },
  textCheckbox: {
    color: color.grayText,
    marginLeft: 6,
  },
  checkboxStyle: {
    width: 20,
    height: 20,
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    backgroundColor: color.gray,
    height: 0.5,
    width: Dimensions.get('screen').width / 3.3,
  },
  textLine: {
    color: color.gray,
  },
  outlineButtonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.main,
    marginRight: 10,
  },
  outlineTextStyle: {
    color: color.main,
  },
});

export {styles};
