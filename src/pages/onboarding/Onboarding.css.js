import { StyleSheet } from 'react-native';
import { wpx } from '../../utils/dimensions';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerItem: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
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
