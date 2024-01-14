import {useState} from 'react';

const useHandlePin = () => {
  const [pressedButton, setPressedButton] = useState(null);
  const [pin, setPin] = useState('');
  const pinLength = 6;

  const handlePinInput = value => {
    if (pin.length < pinLength) {
      setPin(pin + value);
      if (pin.length + 1 === pinLength) {
        console.log('full pin');
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
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
    pinLength,
    pressedButton,
    handlePinInput,
    handleDelete,
    handleButtonPressIn,
    handleButtonPressOut,
  };
};

export {useHandlePin};
