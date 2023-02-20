import { wpx } from 'src/utils/dimensions';

const general = {
  colors: {
    // gray scale
    white: '#FFFFFF',
    lightGray2: '#DFDFE1',
    lightGray: '#ABABB0',
    gray: '#45454A',
    gray20: '#313135',
    darkGray: '#1C1C1E',
    darkGray4: '#2A2D47',
    darkerGray: '#141415',
    black: '#000000',

    // purple
    lightPurple: '#8084A5',
    lightPurple2: '#D4D7E9',
    lightPurple3: '#484b64',
    lightPurple4: '#3C3F57',
    lightPurple5: '#8A87AB',
    lightPurple6: '#6D6B90',
    darkPurple: '#444761',
    darkPurple2: '#0E101E',

    // green
    green: '#36CD77', // theme color
    green5: '#7AD129',
    greenPressed: '#1d7242',

    // blue
    blue5: '#0B6FFB',
    blue6: '#0467F1',
    blue8: '#0356B9',
    bluePressed: '#01418a',

    // red
    red: '#FF3A58',

    // yellow
    yellow5: '#FFAB2E',
  },
  fontWeight: {
    normal: '400',
    mediumBold: '500',
    semiBold: '600',
    bold: '700',
    strong: '900',
  },
  constant: {
    SIDE_MARGIN: wpx(24),
    SIDE_MARGIN_NARROW: wpx(16),
    FONT_FAMILY:'SFPRODISPLAYREGULAR'
  },
  icon: {
    BACK: 'back',
  },
};

const custom = {
  flex1: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
};

export default {
  ...general,
  custom
};
