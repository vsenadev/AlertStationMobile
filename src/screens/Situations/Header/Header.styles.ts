import {StyleSheet} from 'react-native';

export const HeaderStyle = StyleSheet.create({
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
});
