import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingRoute} from '../screens/LoadingRoute';
import {HomeRoute} from '../screens/HomeRoute';
import {MicroappRoute} from '../screens/MicroappRoute';
import {ExampleDetailRoute} from '../screens/ExampleDetailRoute';
import type {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingRoute}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeRoute} options={{headerShown: false}} />
        <Stack.Screen
          name="Microapp"
          component={MicroappRoute}
          options={{title: ''}}
        />
        <Stack.Screen
          name="ExampleDetail"
          component={ExampleDetailRoute}
          options={{title: 'Detalhes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
