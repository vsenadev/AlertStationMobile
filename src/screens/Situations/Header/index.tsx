import React from 'react';
import {Image, Text, View} from 'react-native';
import {HeaderStyle} from './Header.styles';
import Rain from '../../../../assets/images/rain.svg';
import {useEffect, useState} from 'react';
import {getMeteorology} from '../../../../service/Situations.service';

export default function Header() {
  const [meteorology, setMeteorology] = useState({
    condicao: '',
    min: 0,
    max: 0,
  });

  const fetchData = async () => {
    const meteorologyData = await getMeteorology();
    setMeteorology(meteorologyData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Image
        style={HeaderStyle.logo}
        source={require('../../../../assets/images/logo.png')}
      />
      <View style={[HeaderStyle.boxCondition, HeaderStyle.shadowProp]}>
        <Text style={HeaderStyle.headerTitle}>Condição</Text>
        <Rain />
      </View>
      <View style={[HeaderStyle.boxMinMax, HeaderStyle.shadowProp]}>
        <Text style={HeaderStyle.headerTitle}>Miníma e Máxima</Text>
        <View style={HeaderStyle.boxNumbers}>
          <Text style={[HeaderStyle.number, HeaderStyle.min]}>
            {meteorology.min}°
          </Text>
          <Text style={[HeaderStyle.number, HeaderStyle.max]}>
            {meteorology.max}°
          </Text>
        </View>
      </View>
    </>
  );
}
