import React from 'react';
import {TextInput, View} from 'react-native';
import {color} from '../../../../configs';
import {styles} from './styles';

const PinInputs = ({pin, pinLength}) => {
  const pinInputs = [];

  for (let i = 0; i < pinLength; i++) {
    const isActive = i < pin.length;

    pinInputs.push(
      <View
        key={i}
        style={[
          styles.pinInputContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderColor: isActive ? color.main : 'black',
          },
        ]}>
        <TextInput
          style={styles.pinInput}
          value={isActive ? '•' : ''}
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={1}
          editable={false}
        />
      </View>,
    );
  }

  return pinInputs;
};

export {PinInputs};
