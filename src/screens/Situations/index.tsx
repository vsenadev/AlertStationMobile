import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SituationsStyles} from './Situations.styles.ts';
import http from '../../../environments/environment.ts';
import Rain from '../../../assets/images/rain.svg';
import ArrowDown from '../../../assets/images/arrowdown.svg';
import ArrowUp from '../../../assets/images/arrowup.svg';
import {IInfo} from '../../../interface/TrainSituation.interface.ts';

export default function Situations() {
  const [trainsSituations, setTrainsSituation] = useState([]);
  const [meteorology, setMeteorology] = useState({
    condicao: '',
    min: 0,
    max: 0,
  });
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [situationInfo, setSituationInfo] = useState({
    modificado: '',
    descricao: '',
  });

  async function getMeteorology() {
    await http
      .get('meteorology')
      .then(res => setMeteorology(res.data));
  }

  async function getTrainsSituations() {
    await http
      .get('train/situations')
      .then(res => setTrainsSituation(res.data));
  }

  async function getTrainSituationWithId (line: number) {
    await http
      .get(`train/situation/${line}`)
      .then((res) => {console.log(res.data) ,setSituationInfo(res.data)});
  }

  useEffect(() => {
    getMeteorology();
    getTrainsSituations();
  }, []);

  const lowerSearch: string = search.toLowerCase();
  const linesFilter = trainsSituations.filter((element: IInfo) =>
    element.nome.toLowerCase().includes(lowerSearch),
  );

  const Item = ({item}: {item: IInfo}) => {
    return (
      <View style={SituationsStyles.trainInfo}>
        <View style={[SituationsStyles.boxTrain, SituationsStyles.shadowProp, isOpen&&({height: 280})]}>
          <View style={SituationsStyles.lineInfo}>
            <View
              style={[SituationsStyles.lineBox, {backgroundColor: item.cor}]}>
              <Text style={SituationsStyles.lineNumber}>{item.codigo}</Text>
            </View>
            <Text style={SituationsStyles.lineName}>{item.nome}</Text>
          </View>
          <View style={SituationsStyles.lineStatus}>
            <Text
              style={
                item.situacao !== 'Operação Normal'
                  ? {color: '#830D0D'}
                  : {color: '#075B00'}
              }>
              {item.situacao}
            </Text>
            {item.situacao !== 'Operação Normal' && item.situacao !== 'Operações Encerradas' && item.situacao !== 'Operação Encerrada' && (
                <TouchableOpacity onPress={() => {setIsOpen(!isOpen), getTrainSituationWithId(item.codigo)}}>
                  { isOpen ? (<ArrowUp />) : (  <ArrowDown />) }
                </TouchableOpacity>
              )}
          </View>
          {
            isOpen && (
              <View>
                <Text>{situationInfo.descricao}</Text>
              </View>
            )
          }
        </View>
      </View>
    );
  };

  return (
    <View style={SituationsStyles.section}>
      <FlatList
        data={linesFilter}
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
                style={[
                  SituationsStyles.boxMinMax,
                  SituationsStyles.shadowProp,
                ]}>
                <Text style={SituationsStyles.headerTitle}>
                  Miníma e Máxima
                </Text>
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
                    style={[
                      SituationsStyles.input,
                      SituationsStyles.shadowProp,
                    ]}
                    placeholder="Pesquisar por nome da linha"
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
