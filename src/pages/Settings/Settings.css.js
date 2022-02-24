import { StyleSheet } from 'react-native';

import { wpx } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

const MARGIN_HOR = wpx (16);

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  creditCard: {
    marginVertical: wpx(6),
    marginHorizontal: MARGIN_HOR,
    width: wpx(100) - MARGIN_HOR * 2,
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
