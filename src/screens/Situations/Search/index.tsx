import {TextInput, View} from 'react-native';
import {SearchStyles} from './Search.styles';
import {IInput} from '../../../../interface/Input.interface';
import SearchIcon from '../../../../assets/images/search-icon.svg';
import React from 'react';

export default function Search(props: IInput) {
  return (
    <View style={SearchStyles.containerInput}>
      <View style={[SearchStyles.searchSection, SearchStyles.shadowProp]}>
        <TextInput
          style={SearchStyles.input}
          placeholder="Pesquise pelo nome da linha"
          onChangeText={text => props.setSearch(text)}
          underlineColorAndroid="transparent"
        />
        <SearchIcon style={SearchStyles.searchIcon} />
      </View>
    </View>
  );
}
