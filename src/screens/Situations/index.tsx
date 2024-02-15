import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {SituationsStyles} from './Situations.styles.ts';
import http from '../../../environments/environment.ts';
import Rain from '../../../assets/images/rain.svg';
import {IInfo} from '../../../interface/TrainSituation.interface.ts';

export default function Situations() {
  const [trainsSituations, setTrainsSituation] = useState([]);
  const [meteorology, setMeteorology] = useState({
    condicao: '',
    min: 0,
    max: 0,
  });
  const [search, setSearch] = useState('');

  async function getMeteorology() {
    await http.get('meteorology').then(res => setMeteorology(res.data));
  }

  async function getTrainsSituations() {
    await http
      .get('train/situations')
      .then(res => setTrainsSituation(res.data));
  }

  useEffect(() => {
    getMeteorology();
    getTrainsSituations();
  }, []);

  const Item = ({item}: {item: IInfo}) => {
    return (
      <View>
        <Text>{item.situacao}</Text>
      </View>
    );
  };

  return (
    <View style={SituationsStyles.section}>
      <FlatList
        data={trainsSituations}
        renderItem={Item}
        keyExtractor={({codigo}: {codigo: number}) => codigo.toString()}
        ListHeaderComponent={() => {
          return (
            <View style={SituationsStyles.container}>
              <Image
                style={SituationsStyles.logo}
                source={require('../../../assets/images/logo.png')}
              />
              <View
                style={[
                  SituationsStyles.boxCondition,
                  SituationsStyles.shadowProp,
                ]}>
                <Text style={SituationsStyles.headerTitle}>Condição</Text>
                <Rain />
              </View>
              <View
                style={[SituationsStyles.boxMinMax, SituationsStyles.shadowProp]}>
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
                <ImageBackground
                  source={require('../../../assets/images/search.png')}
                  style={SituationsStyles.backgroundImage}
                  imageStyle={SituationsStyles.imageStyle}>
                  <TextInput
                    style={[SituationsStyles.input, SituationsStyles.shadowProp]}
                    placeholder="Esmeralda"
                    onChangeText={text => setSearch(text)}
                    value={search}
                  />
                </ImageBackground>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
