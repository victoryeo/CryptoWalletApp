import { StyleSheet } from 'react-native';
import { wpx } from 'utils/dimensions';
import g from '../../../../assets/globalStyle';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    flexGrow: 1,
    flex: 1,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: wpx(16),
  },
  containerLogoAndTitle: {
    marginBottom: wpx(34),
    alignItems: 'center',
    textAlign: 'center',
  },
  seedPhrasesContainer: {
    flexShrink: 1,
  },
  words: {
    color: g.colors.white,
    textAlign: 'center',
    marginTop: wpx(8),
  },
  bigwords: {
    color: g.colors.yellow5,
    textAlign: 'center',
    marginTop: wpx(8),
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingTop: wpx(20),
    paddingBottom: wpx(50),
  },
});
