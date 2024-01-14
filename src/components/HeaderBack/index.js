import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../configs';

const HeaderBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.iconStyle}
      onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="arrow-left" size={30} color={color.black} />
    </TouchableOpacity>
  );
};

export {HeaderBack};
