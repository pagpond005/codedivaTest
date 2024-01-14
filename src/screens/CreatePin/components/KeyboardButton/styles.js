import {StyleSheet} from 'react-native';
import {color, fontSize} from '../../../../configs';

const styles = StyleSheet.create({
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
  keyboardButtonText: {
    fontSize: fontSize.big28,
  },
});

export {styles};
