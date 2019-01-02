import palette from 'components/theme/DeepCast/palette';
import {
  primaryFontFamily,
  secondaryFontFamily,
  baseSize,
  h6Size,
  h5Size,
  h4Size,
  h3Size,
  h2Size,
  h1Size,
} from 'components/theme/DeepCast/fonts';
import { blueGradient } from './gradients';

const DeepCastTheme = {
  id: 'dcTheme',
  colors: {
    primaryColor: palette.primary,
    secondaryColor: palette.secondary,
    successColor: palette.success,
    infoColor: palette.info,
    warningColor: palette.warning,
    dangerColor: palette.danger,
    textColorDefault: palette.text.neutral,
    textColorDark: palette.text.dark,
    textColorLight: palette.text.light,
  },
  backgrounds: {
    backgroundDefault: palette.background.neutral,
    backgroundLight: palette.background.light,
    backgroundDark: palette.background.dark,
    backgroundGrey: palette.background.grey,
    backgroundGradient: blueGradient,
    backgroundPattern: 'url(/images/patternbg.png)',
  },
  texts: {
    headingFont: primaryFontFamily,
    textFont: secondaryFontFamily,
    baseFontSize: baseSize,
    h6FontSize: h6Size,
    h5FontSize: h5Size,
    h4FontSize: h4Size,
    h3FontSize: h3Size,
    h2FontSize: h2Size,
    h1FontSize: h1Size,
  },
};

export default DeepCastTheme;
