import {StyleSheet as RNStyleSheet, Platform} from 'react-native';

/*
 * this is expansion of RN stylesheet to give
 * ios-, android-, and ipX- specific styles
 */

class StyleSheet {
  static create(styles: Object): {[name: string]: number} {
    const platformStyles = {};

    Object.keys(styles).forEach(name => {
      const {ios, android, ipX, ...style} = {...styles[name]};
      let outputStyle = style;
      if ((ios || ipX) && Platform.OS === 'ios') {
        outputStyle = {...style, ...ios};
      } else if (android && Platform.OS === 'android') {
        outputStyle = {...style, ...android};
      }
      platformStyles[name] = outputStyle;
    });
    return RNStyleSheet.create(platformStyles);
  }
}

export default StyleSheet;
