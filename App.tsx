import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './src/routes/AppRoutes.tsx';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <AppRoutes />
    </SafeAreaView>
  );
}
