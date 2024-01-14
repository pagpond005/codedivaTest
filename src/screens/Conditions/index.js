import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../configs';
import {useNavigation} from '@react-navigation/native';
import {Button, HeaderBack} from '../../components';

const Conditions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderBack />

      <View style={styles.containerCondition}>
        <View style={styles.containerHeader}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={30}
            color={color.main}
          />
          <Text style={styles.textHeader}>เงื่อนไขการใช้บริการ</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.containerButton}>
            <Button
              styleText={styles.outlineTextStyle}
              styleContainer={styles.outlineButtonStyle}
              text={'ปฏิเสธ'}
            />
          </View>

          <View style={styles.containerButton}>
            <Button
              text={'ยอมรับ'}
              styleContainer={styles.marginLeft}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export {Conditions};
