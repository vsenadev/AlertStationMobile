import {StyleSheet} from 'react-native';

export const SituationsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '10%',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  boxCondition: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#ffffff',
    width: 120,
    borderRadius: 6,
    marginHorizontal: 10,
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
  headerTitle: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000',
  },
  boxMinMax: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#ffffff',
    width: 170,
    height: 75,
    borderRadius: 6,
  },
  boxNumbers: {
    flexDirection: 'row',
    gap: 25,
  },
  number: {
    fontFamily: 'Montserrat',
    color: '#000',
    gap: 2,
    fontSize: 16,
  },
  min: {
    color: 'rgb(0,80,255)',
  },
  max: {
    color: '#cb7e29',
    fontWeight: '700',
  },
  containerInput: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    fontFamily: 'Montserrat',
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 100,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
});