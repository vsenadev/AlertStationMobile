import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RealtimeScreen from '../screens/Realtime.screen.tsx';

const Stack = createNativeStackNavigator();

export default function RealtimeRoutes({MainComponent = RealtimeScreen}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RealtimeScreen" component={MainComponent} />
    </Stack.Navigator>
  );
}
