import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({styleContainer, styleText, text, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...styleContainer}}
      onPress={onPress}>
      <Text style={{...styles.text, ...styleText}}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
