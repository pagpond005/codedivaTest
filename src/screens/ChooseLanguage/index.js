import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const ChooseLanguage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.boldText}>ยินดีต้อนรับ</Text>
        <Text style={styles.subText}>กรุณาเลือกภาษา</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button styleContainer={styles.buttonMargin} text="English" />
        <Button text="ไทย" onPress={() => navigation.navigate('Conditions')} />
      </View>
    </View>
  );
};

export {ChooseLanguage};
