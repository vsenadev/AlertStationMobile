import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SituationsStyles} from './Situations.styles.ts';
import http from '../../../environments/environment.ts';
import ArrowDown from '../../../assets/images/arrowdown.svg';
import ArrowUp from '../../../assets/images/arrowup.svg';
import {IInfo} from '../../../interface/TrainSituation.interface.ts';
import Header from './Header/index.tsx';
import Search from './Search/index.tsx';

export default function Situations() {
  const [trainsSituations, setTrainsSituation] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');
  const [situationInfo, setSituationInfo] = useState({
    modificado: '',
    descricao: '',
  });
  const [lineSelected, setLineSelected] = useState(0);

  async function getTrainsSituations() {
    await http
      .get('train/situations')
      .then(res => setTrainsSituation(res.data));
  }

  async function getTrainSituationWithId() {
    if (lineSelected !== 0) {
      await http.get(`train/situation/${lineSelected}`).then(res => {
        setSituationInfo(res.data);
      });
    }
  }

  useEffect(() => {
    getTrainsSituations();
  }, []);

  const lowerSearch: string = search.toLowerCase();
  const linesFilter = trainsSituations.filter((element: IInfo) =>
    element.nome.toLowerCase().includes(lowerSearch),
  );

  const Item = ({item}: {item: IInfo}) => {
    return (
      <View
        style={[SituationsStyles.containerLine, SituationsStyles.shadowProp]}>
        <TouchableOpacity
          style={SituationsStyles.titleContainer}
          disabled={
            item.situacao === 'Operação Normal' ||
            item.situacao === 'Operação Encerradaddd' ||
            item.situacao === 'Operações Encerradasddd'
          }
          onPress={() => {
            setExpanded(!expanded);
            setLineSelected(item.codigo);
            getTrainSituationWithId();
          }}>
          <View style={SituationsStyles.div}>
            <View
              style={[SituationsStyles.boxColor, {backgroundColor: item.cor}]}>
              <Text style={SituationsStyles.code}>{item.codigo}</Text>
            </View>
            <Text style={SituationsStyles.title}>{item.nome}</Text>
          </View>
          <Text
            style={[
              SituationsStyles.situation,
              {
                color:
                  (item.situacao as string) !== 'Operação Normal'
                    ? '#948500'
                    : (item.situacao as string) === 'Operação Paralisada'
                    ? '#830D0D'
                    : '#075B00',
              },
            ]}>
            {item.situacao}
          </Text>
        </TouchableOpacity>
        {expanded && lineSelected === item.codigo && (
          <View style={SituationsStyles.contentContainer}>
            <Text style={SituationsStyles.time}>
              {situationInfo.modificado}
            </Text>
            <Text style={SituationsStyles.content}>
              {situationInfo.descricao}
            </Text>
          </View>
        )}
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
              <Header />
              <Search search={search} setSearch={setSearch} />
            </View>
          );
        }}
      />
    </View>
  );
}
