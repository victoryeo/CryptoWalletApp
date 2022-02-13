import { Dimensions } from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

/**
 * @name widthPixcel
 * @description provided px is in 360 px height resolution,
 *    and this function will convert to the value relatively to viewPort width
 */
 function widthPixcel(px: number) {
  const ratio = px / 360;
  return Math.round(ratio * viewportWidth);
}

export {
  widthPixcel as wpx,
};
