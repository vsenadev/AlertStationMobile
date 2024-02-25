import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const SituationsStyles = StyleSheet.create({
  section: {
    height: height,
    backgroundColor: '#ffffff6c',
    paddingBottom: 120,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '10%',
    paddingHorizontal: 10,
    paddingTop: 25,
    backgroundColor: '#ffffff6c',
  },
  trainInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTrain: {
    flexDirection: 'row',
    width: width - 30,
    height: 70,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  lineBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 3,
  },
  lineNumber: {
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  lineName: {
    fontFamily: 'Montserrat',
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  lineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
  containerLine: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 15,
    marginHorizontal: 10,
    width: '95%',
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 65,
    justifyContent: 'space-between',
  },
  div: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxColor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 3,
  },
  code: {
    color: '#FFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Montserrat',
    paddingLeft: 10,
  },
  contentContainer: {
    padding: 10,
  },
  content: {
    fontSize: 16,
  },
  situation: {
    marginLeft: 100,
    // textAlign: 'right',
  },
});
