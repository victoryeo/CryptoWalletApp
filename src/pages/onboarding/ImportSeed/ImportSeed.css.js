import { StyleSheet } from 'react-native';
import { wpx } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: g.colors.black,
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: g.constant.SIDE_MARGIN_NARROW,
    paddingTop: wpx(54),
  },
  signInFaceIdContainer: {
    marginTop: wpx(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: wpx(48),
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    marginTop: wpx(16),
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: wpx(50),
  },
});