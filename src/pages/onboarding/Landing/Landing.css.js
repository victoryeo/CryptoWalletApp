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
  containerLogoAndTitle: {
    flexGrow: 1,
    paddingTop: wpx(60),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: wpx(98),
    paddingHorizontal: wpx(54),
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
