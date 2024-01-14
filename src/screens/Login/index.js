import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {color} from '../../configs';
import {Button, CheckBoxCustom} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerMiddle}>
        <TextInput
          style={{...styles.input, ...styles.marginBottom50}}
          onChangeText={setUsername}
          value={username}
          placeholder="ชื่อผู้ใช้งาน"
          placeholderTextColor={color.grayText}
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="รหัสผ่าน"
          placeholderTextColor={color.grayText}
        />

        <View style={styles.containerCheckboxLine}>
          <View style={styles.containerCheckbox}>
            <CheckBoxCustom
              value={toggleCheckBox}
              onValueChange={setToggleCheckBox}
            />

            <Text style={styles.textCheckbox}>บันทึกการเข้าสู่ระบบ</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.textGray}>ลืมรหัสผ่าน?</Text>
          </TouchableOpacity>
        </View>

        <Button
          text="เข้าสู่ระบบ"
          onPress={() => navigation.navigate('OtpRequest')}
        />

        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.textLine}>ไม่มีบัญชีผู้ใช้</Text>
          <View style={styles.line} />
        </View>

        <Button text="เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้" />
      </View>
    </View>
  );
};

export {Login};
