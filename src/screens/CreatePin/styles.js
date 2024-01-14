import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.normal,
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  keyboardButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: color.gray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  keyboardBackButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  keyboardButtonText: {
    fontSize: fontSize.big28,
  },
  keyboardButtonEmpty: {
    width: 80,
    height: 80,
    margin: 10,
  },
});

export {styles};
