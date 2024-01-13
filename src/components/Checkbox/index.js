import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';

const CheckBoxCustom = ({
  value,
  onValueChange,
  boxType = 'square',
  lineWidth = 1,
}) => {
  return (
    <CheckBox
      value={value}
      onValueChange={newValue => onValueChange(newValue)}
      boxType={boxType}
      style={styles.checkboxStyle}
      lineWidth={lineWidth}
    />
  );
};

export {CheckBoxCustom};
