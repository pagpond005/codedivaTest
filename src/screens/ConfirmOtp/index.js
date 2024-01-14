import React, {useState} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {CountdownTimer, HeaderBack} from '../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const ConfirmOtp = () => {
  const [countdown, setCountdown] = useState(60);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <HeaderBack />

      <View style={styles.containerContent}>
        <Text style={styles.textHeader}>ยืนยันตัวตน</Text>

        <Text style={styles.subText}>
          กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ
        </Text>
        <Text style={{...styles.subText, ...styles.marginTop8}}>
          082-XXX-8998
        </Text>

        <OTPInputView
          style={styles.otpStyle}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={code => {
            Keyboard.dismiss();
          }}
        />

        <Text style={styles.bottomText}>หากคุณไม่ได้รับรหัส?</Text>

        <TouchableOpacity
          disabled={countdown > 0}
          onPress={() => setCountdown(60)}
          style={styles.timerContainer}>
          <Text style={styles.resendText}>
            ส่งรหัสใหม่{' '}
            {countdown > 0 && (
              <Text>
                (
                <CountdownTimer
                  countdown={countdown}
                  setCountdown={setCountdown}
                />
                )
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export {ConfirmOtp};
