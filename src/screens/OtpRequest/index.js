import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button, HeaderBack} from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../configs';
import {useNavigation} from '@react-navigation/native';

const OtpRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderBack />

      <View style={styles.containerContent}>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="cellphone-lock"
            size={80}
            color={color.main}
          />
        </View>

        <Text style={styles.headerText}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>

        <Text style={styles.telText}>082-XXX-8998</Text>

        <Button
          text="ขอรหัส OTP"
          onPress={() => navigation.navigate('ConfirmOtp')}
        />

        <Text style={styles.subText}>
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อ 02-xxx-xxxx
        </Text>
      </View>
    </View>
  );
};

export {OtpRequest};
