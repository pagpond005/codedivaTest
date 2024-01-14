import {useState} from 'react';

const useHandlePin = () => {
  const [pressedButton, setPressedButton] = useState(null);
  const [confirmScreen, setConfirmScreen] = useState(false);
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const pinLength = 6;

  const handlePinInput = value => {
    if (confirmScreen) {
      setConfirmPin(confirmPin + value);
      if (confirmPin.length + 1 === pinLength) {
        console.log('full confirm pin');
      }
    }
    if (pin.length < pinLength) {
      setPin(pin + value);
      if (pin.length + 1 === pinLength) {
        setConfirmScreen(true);
      }
    }
  };

  const handleDelete = () => {
    if (confirmScreen) {
      setConfirmPin(confirmPin.slice(0, -1));
    } else {
      setPin(pin.slice(0, -1));
    }
    setPressedButton(null);
  };

  const handleButtonPressIn = number => {
    setPressedButton(number);
    handlePinInput(number.toString());
  };

  const handleButtonPressOut = () => {
    setPressedButton(null);
  };

  return {
    pin,
    confirmPin,
    pinLength,
    pressedButton,
    confirmScreen,
    handlePinInput,
    handleDelete,
    handleButtonPressIn,
    handleButtonPressOut,
  };
};

export {useHandlePin};
