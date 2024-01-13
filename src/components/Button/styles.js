import {StyleSheet} from 'react-native';
import {color} from '../../configs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: color.white,
    paddingVertical: 12,
  },
});

export {styles};
