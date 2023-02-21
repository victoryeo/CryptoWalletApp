import { StyleSheet } from 'react-native';

import { wpx } from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: '0xffeeff',
    paddingHorizontal: wpx(16),
    flex: 1,
  },
  header: {
    paddingTop: wpx(17),
    paddingBottom: wpx(50),
    paddingHorizontal: wpx(4),
  },
  buttonsContainer: {
    marginTop: wpx(16),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: wpx(50),
  },
  inputDropdownContainer: { marginBottom: wpx(24) },
  recentTitle: { marginTop: wpx(28), marginBottom: wpx(10) },
  recentListContainer: { flex: 1, flexGrow: 1 },
  bigwords: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: wpx(8),
    fontSize: 20,
  },
  words: {
    color: 'white',
    textAlign: 'center',
    marginTop: wpx(8),
  },
  input: {
    backgroundColor: 'gray',
    marginTop: wpx(4),
    height: wpx(28),
    color: 'white',
    paddingLeft: wpx(16),
  },
});
