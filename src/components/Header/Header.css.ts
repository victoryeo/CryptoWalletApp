import { StyleSheet } from 'react-native';

import { wpx } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    height: wpx(64),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTouch: {
    width: wpx(50),
    height: wpx(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  words: {
    color: 'white',
    textAlign: 'center',
    marginTop: wpx(8),
  },
  bigwords: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: wpx(8),
    fontSize: 20,
  },
});
