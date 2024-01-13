import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({styleContainer, text, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...styleContainer}}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
