import { StyleSheet } from 'react-native';
import { wpx } from '../../../utils/dimensions';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bigwords: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: wpx(8),
    fontSize: 30,
  },
  containerLogoAndTitle: {
    marginTop: wpx(60), 
    alignItems: 'center' 
  },
  space: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    paddingHorizontal: wpx(60),
  },
  buttonsContainer: {
    marginBottom: wpx(50),
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: wpx(16),
  },
  importButton: {
    marginTop: wpx(16),
  },
});
