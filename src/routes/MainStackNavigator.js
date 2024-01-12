import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChooseLanguage} from '../screens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
