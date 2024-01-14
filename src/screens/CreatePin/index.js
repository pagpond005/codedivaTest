/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {color} from '../../configs';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHandlePin} from './hooks';
import {KeyboardButton, PinInputs} from './components';

const CreatePin = () => {
  const {
    pin,
    pinLength,
    pressedButton,
    handleDelete,
    handleButtonPressIn,
    handleButtonPressOut,
  } = useHandlePin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ตั้งรหัส PIN CODE</Text>

      <View style={styles.pinContainer}>
        <PinInputs pin={pin} pinLength={pinLength} />
      </View>

      <View style={styles.keyboardContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => {
          return (
            <KeyboardButton
              key={e}
              number={e}
              pressedButton={pressedButton}
              handleButtonPressIn={handleButtonPressIn}
              handleButtonPressOut={handleButtonPressOut}
            />
          );
        })}

        <View style={styles.keyboardButtonEmpty} />

        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.keyboardButton,
            {
              backgroundColor:
                pressedButton === '0' ? color.main : 'transparent',
            },
          ]}
          onPressIn={() => handleButtonPressIn('0')}
          onPressOut={handleButtonPressOut}>
          <Text
            style={[
              styles.keyboardButtonText,
              {
                color: pressedButton === '0' ? color.white : color.black,
              },
            ]}>
            0
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.keyboardBackButton,
            {
              backgroundColor:
                pressedButton === 'delete' ? color.main : 'transparent',
            },
          ]}
          onPressIn={handleDelete}
          onPressOut={handleButtonPressOut}>
          <MaterialCommunityIcons
            name="backspace-outline"
            size={30}
            color={color.grayText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CreatePin};
