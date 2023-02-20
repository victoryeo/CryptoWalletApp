import { StyleSheet } from 'react-native';
import { wpx } from '../../utils/dimensions';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  slide: {
    paddingHorizontal: wpx(20),
    justifyContent: 'space-between',
    height: '100%',
  },
  paginationDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.92)',
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    marginHorizontal: 2,
  },
  inactiveDotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerItem: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
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
    fontSize: 30,
  },
  containerLogoAndTitle: { 
    marginTop: wpx(60), 
    alignItems: 'center' 
  },
  containerOnboardingText: {
    paddingHorizontal: wpx(50),
  },
  onboardingText: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: wpx(110),
  },
  containerImageSlider: {
    marginTop: wpx(75),
    height: wpx(331),
    paddingHorizontal: wpx(45),
    flexGrow: 1,
    alignItems: 'center',
  },
  contaimerImageSliderImage: {
    height: wpx(290),
    width: wpx(290),
    flexGrow: 1,
  },
  buttonsContainer: {
    marginTop: wpx(25),
    paddingHorizontal: wpx(16),
    marginBottom: wpx(51),
  },
});
