import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {color} from '../../../../configs';

const KeyboardButton = ({
  pressedButton,
  number,
  handleButtonPressIn,
  handleButtonPressOut,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={number}
      style={[
        styles.keyboardButton,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor:
            pressedButton === number ? color.main : 'transparent',
        },
      ]}
      onPressIn={() => handleButtonPressIn(number)}
      onPressOut={handleButtonPressOut}>
      <Text
        style={[
          styles.keyboardButtonText,
          {
            color: pressedButton === number ? color.white : color.black,
          },
        ]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export {KeyboardButton};
