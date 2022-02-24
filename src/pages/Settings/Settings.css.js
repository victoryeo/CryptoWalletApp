import { StyleSheet } from 'react-native';

import { wpx } from 'utils/dimensions';
import g from 'src/assets/globalStyle';

const MARGIN_HOR = wpx (16);

export default StyleSheet.create({
  panelIcon: {
    width: wpx(40),
    height: wpx(40),
  },
  flatlist: {
    paddingBottom: wpx(14),
  },
  words: {
    color: g.colors.white,
    textAlign: 'center',
    marginTop: wpx(8),
  },
  safeAreaContainer: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
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
