import {StyleSheet} from 'react-native';
import {color} from '../../configs';
import {fontSize} from '../../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconStyle: {
    position: 'absolute',
    top: 60,
    left: 20,
    padding: 5,
  },
  containerCondition: {
    flex: 0.75,
    backgroundColor: color.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  containerHeader: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: color.underline,
    flexDirection: 'row',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: fontSize.header,
    marginLeft: 12,
  },
  row: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  containerButton: {
    flex: 0.5,
    paddingHorizontal: 10,
  },
  outlineButtonStyle: {
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.main,
  },
  outlineTextStyle: {
    color: color.main,
  },
});

export {styles};
