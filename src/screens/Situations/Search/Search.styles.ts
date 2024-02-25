import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

export const SearchStyles = StyleSheet.create({
  containerInput: {
    backgroundColor: '#ffffff6c',
    width: width - 20,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 100,
  },
  shadowProp: {
    shadowColor: 'rgba(0,0,0,0.77)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  searchIcon: {
    paddingRight: 40,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
    color: '#424242',
  },
});
