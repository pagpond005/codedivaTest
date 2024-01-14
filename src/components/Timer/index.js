import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const CountdownTimer = ({countdown, setCountdown}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(interval);
        }
        return prevCountdown > 0 ? prevCountdown - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setCountdown]);

  return <Text style={styles.timerText}>{countdown}</Text>;
};
export {CountdownTimer};
