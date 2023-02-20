import { StyleSheet } from 'react-native';
import { wpx } from '../../../../utils/dimensions';
import g from '../../../../assets/globalStyle';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  space: {
    width: 20,
    height: 20,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: wpx(16),
  },
  containerLogoAndTitle: {
    marginBottom: wpx(26),
    alignItems: 'center',
    textAlign: 'center',
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
  input: {
    backgroundColor: g.colors.darkGray,
    marginTop: wpx(4),
    height: wpx(28),
    color: g.colors.white,
    paddingLeft: wpx(16),
  },
  buttonsContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: wpx(50),
  },
});
