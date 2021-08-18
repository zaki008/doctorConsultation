const mainColors = {
  green1: '#129B7F',
  green2: '#DFFFF8',
  green3: '#129B7F',
  green4: '#1CFFD6',
  green5: '#67F2D9',
  green6: '#2FEFC8',
  dark1: '#152C5B',
  dark2: '#495A75',
  white: '#ffff',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#E1E5EA',
  transparent: 'rgba(240, 255, 240, 0.5)',
  red1: '#FA4659',
};

const Colors = {
  primary: mainColors.green1,
  secondary: mainColors.green3,
  white: mainColors.white,
  disable: mainColors.grey3,
  enable: mainColors.green5,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    white: mainColors.white,
    menuActive: mainColors.green4,
    menuInactive: mainColors.dark2,
    subTitle: mainColors.green6,
    loading: mainColors.green1,
  },
  button: {
    primary: {
      backgroundColor: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      backgroundColor: mainColors.white,
      text: mainColors.dark1,
    },
    disable:{
      backgroundColor: mainColors.grey3,
      text: mainColors.grey1,
    },
  },
  border: {
    primary: mainColors.grey2,
    secondary: mainColors.green1,
  },
  cardLight: mainColors.green2,
  bgLoading: mainColors.transparent,
  error: mainColors.red1,
};

export default Colors;
