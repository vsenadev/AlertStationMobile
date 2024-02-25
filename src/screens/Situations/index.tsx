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
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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

  async function getTrainSituationWithId(line: number) {
    await http.get(`train/situation/${line}`).then(res => {
      console.log(res.data), setSituationInfo(res.data);
    });
  }

  useEffect(() => {
    getTrainsSituations();
  }, []);

  const lowerSearch: string = search.toLowerCase();
  const linesFilter = trainsSituations.filter((element: IInfo) =>
    element.nome.toLowerCase().includes(lowerSearch),
  );

  const dados = [
    {
      _id: '65ce826296c7e24fda2b1b8b',
      codigo: 1,
      id: 6203400257536000,
      situacao: 'Operação Paralisada',
      cor: '#00378C',
      nome: 'Azul',
    },
    {
      _id: '65ce826296c7e24fda2b1ba0',
      codigo: 2,
      id: 4868240048128000,
      situacao: 'Operação Normal',
      cor: '#186D55',
      nome: 'Verde',
    },
    {
      _id: '65ce826296c7e24fda2b1bab',
      codigo: 3,
      id: 6304350141939712,
      situacao: 'Operação Normal',
      cor: '#F51200',
      nome: 'Vermelha',
    },
    {
      _id: '65ce826296c7e24fda2b1bb6',
      codigo: 4,
      id: 4660844667338752,
      situacao: 'Operação Normal',
      cor: '#EFBA00',
      nome: 'Amarela',
    },
    {
      _id: '65ce826296c7e24fda2b1bcb',
      codigo: 5,
      id: 6242654547345408,
      situacao: 'Operação Normal',
      cor: '#9271B1',
      nome: 'Lilás',
    },
    {
      _id: '65ce826296c7e24fda2b1bd8',
      codigo: 7,
      id: 6035571155664896,
      situacao: 'Operação Normal',
      cor: '#C80857',
      nome: 'Rubi',
    },
    {
      _id: '65ce826296c7e24fda2b1be8',
      codigo: 8,
      id: 4789654494642176,
      situacao: 'Operação Normal',
      cor: '#949488',
      nome: 'Diamante',
    },
    {
      _id: '65ce826296c7e24fda2b1bfa',
      codigo: 9,
      id: 6242285985464320,
      situacao: 'Operação Normal',
      cor: '#219896',
      nome: 'Esmeralda',
    },
    {
      _id: '65ce826296c7e24fda2b1c08',
      codigo: 10,
      id: 6197029378195456,
      situacao: 'Operação Normal',
      cor: '#1B85A5',
      nome: 'Turquesa',
    },
    {
      _id: '65ce826296c7e24fda2b1c14',
      codigo: 11,
      id: 4837130861805568,
      situacao: 'Operação Normal',
      cor: '#F46C55',
      nome: 'Coral',
    },
    {
      _id: '65ce826296c7e24fda2b1c1f',
      codigo: 12,
      id: 4788027641561088,
      situacao: 'Operação Normal',
      cor: '#1F2086',
      nome: 'Safira',
    },
    {
      _id: '65ce826296c7e24fda2b1c2e',
      codigo: 13,
      id: 4899279843885056,
      situacao: 'Operação Normal',
      cor: '#29B352',
      nome: 'Jade',
    },
    {
      _id: '65ce826296c7e24fda2b1c3d',
      codigo: 15,
      id: 5970941796417536,
      situacao: 'Operação Normal',
      cor: '#848D90',
      nome: 'Prata',
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const Item = ({item}: {item: IInfo}) => {
    return (
      <View
        style={[SituationsStyles.containerLine, SituationsStyles.shadowProp]}>
        <TouchableOpacity
          style={SituationsStyles.titleContainer}
          onPress={() => setExpanded(!expanded)}>
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
        {expanded && (
          <View style={SituationsStyles.contentContainer}>
            <Text style={SituationsStyles.content}>{item.situacao}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={SituationsStyles.section}>
      <FlatList
        data={dados}
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
