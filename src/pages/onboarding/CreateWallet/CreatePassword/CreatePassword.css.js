import { StyleSheet } from 'react-native';
import { wpx } from '../../../../utils/dimensions';
import g from '../../../../assets/globalStyle';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    flexGrow: 1,
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
    marginTop: wpx(24),
    height: wpx(64),
    color: g.colors.white,
    paddingLeft: wpx(16),
  },
  signInFaceIdContainer: {
    marginTop: wpx(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: wpx(24),
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: wpx(50),
  },
});
