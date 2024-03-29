import { StyleSheet } from 'react-native';

import { wpx , wp } from '../../utils/dimensions';
import g from '../../assets/globalStyle';

const MARGIN_HOR = wpx (16);

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: g.constant.SIDE_MARGIN_NARROW,
    paddingTop: wpx(24),
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
  bgContainer: {
    flex: 1,
  },
  logo: {
    width: 66,
    height: 58,
  },
  contentContainer: {
    paddingVertical: 20
  },
  space: {
    width: 20,
    height: 20,
  },
});
