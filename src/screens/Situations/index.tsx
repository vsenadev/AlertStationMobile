import React, {useEffect, useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {SituationsStyles} from './Situations.styles.ts';
import http from '../../../environments/environment.ts';
import Rain from '../../../assets/images/rain.svg';

export default function Situations() {
  const [meteorology, setMeteorology] = useState({
    condicao: '',
    min: 0,
    max: 0,
  });
  const [search, setSearch] = useState('');

  function getMeteorology() {
    http.get('meteorology').then(res => setMeteorology(res.data));
  }

  useEffect(() => {
    getMeteorology();
  }, []);

  return (
    <View style={SituationsStyles.container}>
      <Image
        style={SituationsStyles.logo}
        source={require('../../../assets/images/logo.png')}
      />
      <View
        style={[SituationsStyles.boxCondition, SituationsStyles.shadowProp]}>
        <Text style={SituationsStyles.headerTitle}>Condição</Text>
        <Rain />
      </View>
      <View style={[SituationsStyles.boxMinMax, SituationsStyles.shadowProp]}>
        <Text style={SituationsStyles.headerTitle}>Miníma e Máxima</Text>
        <View style={SituationsStyles.boxNumbers}>
          <Text style={[SituationsStyles.number, SituationsStyles.min]}>
            {meteorology.min}°
          </Text>
          <Text style={[SituationsStyles.number, SituationsStyles.max]}>
            {meteorology.max}°
          </Text>
        </View>
      </View>
      <View style={SituationsStyles.containerInput}>
        <TextInput
          style={[SituationsStyles.input, SituationsStyles.shadowProp]}
          placeholder="Esmeralda"
          onChangeText={text => setSearch(text)}
          value={search}
        />
      </View>
    </View>
  );
}
