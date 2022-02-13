import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import gStyle from '../assets/globalStyle';

const Loader = ({ style, size, animating }) => {
  return (
    <ActivityIndicator
      color={gStyle.colors.lightPurple2}
      size={size}
      style={style}
      animating={animating}
    />
  );
};

Loader.defaultProps = {
  style: null,
  size: 'small',
  animating: true,
};

Loader.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['small', 'large']),
  animating: PropTypes.bool,
};

export default Loader;