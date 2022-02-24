import { StyleSheet } from 'react-native';
import { wpx } from 'utils/dimensions';
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
  titleContainer: {
    flexDirection: 'row',
    marginTop: wpx(15),
    marginBottom: wpx(31),
  },
  infoIcon: {
    marginRight: wpx(11),
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
  box: {
    width: '100%',
    marginHorizontal: wpx(16),
    padding: wpx(16),
    borderRadius: wpx(16),
    backgroundColor: g.colors.darkerGray,
    marginBottom: wpx(24),
  },
  boxTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wpx(8),
  },
  containerLogoAndTitle: {
    paddingTop: wpx(10),
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: wpx(50),
  },
  remindMeButton: {
    marginBottom: wpx(24),
  },
});
