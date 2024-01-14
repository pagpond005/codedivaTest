import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button, HeaderBack} from '../../components';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../constants/images';
import {color} from '../../configs';

const OtpRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderBack />

      <View style={styles.containerContent}>
        <Image
          source={IMAGES.otpRequest}
          style={styles.imgStyle}
          tintColor={color.main}
        />

        <Text style={styles.headerText}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>

        <Text style={styles.telText}>082-XXX-8998</Text>

        <Button
          text="ขอรหัส OTP"
          onPress={() => navigation.navigate('ConfirmOtp')}
        />

        <Text style={styles.subText}>
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อ 02-XXX-XXXX
        </Text>
      </View>
    </View>
  );
};

export {OtpRequest};
