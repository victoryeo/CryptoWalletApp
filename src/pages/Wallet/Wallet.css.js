import { StyleSheet } from 'react-native';

import { wpx , wp } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

const MARGIN_HOR = wpx (16);

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: g.constant.SIDE_MARGIN_NARROW,
    paddingTop: wpx(54),
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
  creditCard: {
    marginVertical: wpx(6),
    marginHorizontal: MARGIN_HOR,
    width: wp(100) - MARGIN_HOR * 2,
  },
  sectionBalance: {
    marginHorizontal: g.constant.SIDE_MARGIN,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountNumber: {
    marginHorizontal: g.constant.SIDE_MARGIN,
  }
});
