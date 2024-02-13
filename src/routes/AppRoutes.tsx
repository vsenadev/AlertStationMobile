import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrainIcon from '../../assets/images/trainicon.svg';
import HomeIcon from '../../assets/images/homeicon.svg';
import SituationsRoute from './SituationsRoutes.tsx';
import RealtimeRoutes from './RealtimeRoutes.tsx';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            let Icon = HomeIcon;

            if (route.name === 'Tempo Real') {
              Icon = TrainIcon;
            }

            return <Icon color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarStyle: {height: 70},
          tabBarLabelStyle: {
            fontSize: 12,
            color: '#000',
            fontFamily: 'Montserrat',
          },
          tabBarItemStyle: {paddingBottom: 5, paddingTop: 5},
        })}>
        <Tab.Screen name="Home" component={SituationsRoute} />
        <Tab.Screen name="Tempo Real" component={RealtimeRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
