import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home.screen.tsx';

const Stack = createNativeStackNavigator();

export default function SituationsRoute({MainComponent = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={MainComponent} />
    </Stack.Navigator>
  );
}
