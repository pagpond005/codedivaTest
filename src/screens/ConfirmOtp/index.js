import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {HeaderBack} from '../../components';

const ConfirmOtp = () => {
  return (
    <View style={styles.container}>
      <HeaderBack />

      <View style={styles.containerContent}>
        <Text style={styles.textHeader}>ยืนยันตัวตน</Text>

        <Text style={styles.subText}>
          กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ
        </Text>
        <Text style={{...styles.subText, ...styles.marginTop8}}>
          082-XXX-8998
        </Text>
      </View>
    </View>
  );
};

export {ConfirmOtp};
