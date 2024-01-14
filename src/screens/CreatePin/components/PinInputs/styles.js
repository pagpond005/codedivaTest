import {StyleSheet} from 'react-native';
import {color} from '../../../../configs';

const styles = StyleSheet.create({
  pinInputContainer: {
    width: 16,
    height: 16,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginBottom: 30,
  },
  pinInput: {
    flex: 1,
    textAlign: 'center',
    paddingLeft: 1,
    fontSize: 35,
    color: color.main,
  },
});

export {styles};
