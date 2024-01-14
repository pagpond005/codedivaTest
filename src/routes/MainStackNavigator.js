import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChooseLanguage,
  Conditions,
  ConfirmOtp,
  CreatePin,
  Login,
  OtpRequest,
} from '../screens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Conditions"
        component={Conditions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OtpRequest"
        component={OtpRequest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmOtp"
        component={ConfirmOtp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreatePin"
        component={CreatePin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
