import { Dimensions } from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

/**
 * @name widthPixel
 * @description provided px is in 360 px height resolution,
 *    and this function will convert to the value relatively to viewPort width
 */
 function widthPixel(px: number) {
  const ratio = px / 360;
  return Math.round(ratio * viewportWidth);
}

function widthPercent(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export {
  widthPercent as wp,
  widthPixel as wpx,
};
