import 'react-native-gesture-handler'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './src/List/TelaLogin';
import TabBarra from './Tab';

const Stack = createNativeStackNavigator();

export default function AppAtividades() {
 return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tab'>
       

        <Stack.Screen name={'Login'} component={TelaLogin} 
          options={{
            headerShown: false
          }}
          />

         <Stack.Screen name={'TabBarra'} component={TabBarra} 
          options={{
            headerShown: false
          }}
          />


         
        </Stack.Navigator>
      </NavigationContainer>
  );
}
