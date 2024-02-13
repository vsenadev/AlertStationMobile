import React from 'react';
import {View, Button, Alert} from 'react-native';

export default function Realtime() {
  const showAlert = () => {
    Alert.alert('Alerta', 'Você pressionou o botão!', [{text: 'OK'}]);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pressione-me REALTIME" onPress={showAlert} />
    </View>
  );
}
