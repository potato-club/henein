import { pl } from 'date-fns/locale';
import { DefaultTheme } from 'styled-components';

export const paletteColor = {
  primary900: '#DE5617',
  primary800: '#E86E1A',
  primary700: '#EF7E1C',
  primary600: '#F68D1F',
  primary500: '#FA9821',
  primary400: '#FBA735',
  primary300: '#FCB756',
  primary200: '#FDCC85',
  primary100: '#FDE0B5',
  primary050: '#FEF3E1',
  grey900: '#212225',
  grey800: '#424347',
  grey700: '#616266',
  grey600: '#75767A',
  grey500: '#9E9FA4',
  grey400: '#BDBEC3',
  grey300: '#E0E1E6',
  grey200: '#EEEEF3',
  grey100: '#F4F5FA',
  grey050: '#F9FAFF',
  grey800A: '#424347E5',
  grey700A: '#616266E5',
  grey600A: '#75767AE5',
  danger900: '#BF0003',
  danger800: '#CD0015',
  danger700: '#DA091D',
  danger600: '#EB1D22',
  danger500: '#FA2C21',
  danger400: '#F64341',
  danger300: '#EC6968',
  danger200: '#F59492',
  danger100: '#FFCACE',
  danger050: '#FFEAED',
  black900: '#000000',
  black800: '#000000E6',
  black700: '#000000CC',
  black600: '#000000B3',
  black500: '#00000099',
  black400: '#00000080',
  black300: '#00000066',
  black200: '#0000004D',
  black100: '#00000033',
  black050: '#0000001A',
  black025: '#0000000D',
  white900: '#FFFFFF',
  white800: '#FFFFFFE6',
  white700: '#FFFFFFCC',
  white600: '#FFFFFFB3',
  white500: '#FFFFFF99',
  white400: '#FFFFFF80',
  white300: '#FFFFFF66',
  white200: '#FFFFFF4D',
  white100: '#FFFFFF33',
  white050: '#FFFFFF1A',
  white025: '#FFFFFF0D',
  white900A: '#FFFFFFE5',
  secondary900: '#273DB4',
  secondary800: '#265ED3',
  secondary700: '#2570E6',
  secondary600: '#2183FA',
  secondary500: '#1791FF',
  secondary400: '#39A1FF',
  secondary300: '#5EB2FF',
  secondary200: '#BBDDFF',
  secondary100: '#BBDDFF',
  secondary050: '#E3F2FF',
};

export const lightMode: DefaultTheme = {
  background: paletteColor.grey050,
  border: paletteColor.black050,
  card: paletteColor.white900,
  divider: paletteColor.black100,
  text: paletteColor.black800,
  footerBackground: paletteColor.grey200,
  cardHeader: paletteColor.white900A,
  subText: paletteColor.black500,
  chatBackground: paletteColor.grey200,
  chatBubbleBackground: paletteColor.white900,
  footerText: paletteColor.black500,
  footerSubText: paletteColor.black200,
  header: paletteColor.white900A,
  input: paletteColor.white900,
  button: paletteColor.white900,
  toolButtonHover: paletteColor.grey100,
  chatSelfText: paletteColor.secondary600,
  headerButtonHover: paletteColor.grey200,
  mentionText: paletteColor.secondary600,
  boxShadow: paletteColor.black025,
  brand: paletteColor.primary600,
  brandHover: paletteColor.primary400,
  brandActive: paletteColor.primary700,
  danger: paletteColor.danger300,
  dangerHover: paletteColor.danger200,
  dangerActive: paletteColor.danger400,
  modalBackdrop: paletteColor.black200,
  tabContainerBackground: paletteColor.white900,
  characterCardDisableBackground: paletteColor.grey400,
  characterCardInfoBackground: paletteColor.white800,
  characterCardButton: paletteColor.black600,
  buttonBackground: paletteColor.white900,
  buttonDisableBackground: paletteColor.grey100,
  buttonDisableText: paletteColor.black300,
  hyperlink: paletteColor.secondary600,
  toggleSelect: paletteColor.white800,
  buttonRingHover: paletteColor.black025,
  buttonRingActive: paletteColor.white050,
  loginBackground: paletteColor.primary050,
};
export const darkMode: DefaultTheme = {
  background: paletteColor.grey900,
  border: paletteColor.white050,
  card: paletteColor.grey800,
  divider: paletteColor.white100,
  text: paletteColor.white900,
  footerBackground: paletteColor.black900,
  cardHeader: paletteColor.grey700A,
  subText: paletteColor.white600,
  chatBackground: paletteColor.grey800,
  chatBubbleBackground: paletteColor.grey700,
  footerText: paletteColor.white600,
  footerSubText: paletteColor.white300,
  header: paletteColor.grey800A,
  input: paletteColor.grey900,
  button: paletteColor.grey700,
  toolButtonHover: paletteColor.grey800,
  chatSelfText: paletteColor.secondary500,
  headerButtonHover: paletteColor.grey700,
  mentionText: paletteColor.secondary500,
  boxShadow: paletteColor.black025,
  brand: paletteColor.primary500,
  brandHover: paletteColor.primary300,
  brandActive: paletteColor.primary600,
  danger: paletteColor.danger400,
  dangerHover: paletteColor.danger300,
  dangerActive: paletteColor.danger500,
  modalBackdrop: paletteColor.black300,
  tabContainerBackground: paletteColor.grey800,
  characterCardDisableBackground: paletteColor.black900,
  characterCardInfoBackground: paletteColor.grey800A,
  characterCardButton: paletteColor.white700,
  buttonBackground: paletteColor.grey700,
  buttonDisableBackground: paletteColor.grey900,
  buttonDisableText: paletteColor.white400,
  hyperlink: paletteColor.secondary500,
  toggleSelect: paletteColor.grey700A,
  buttonRingHover: paletteColor.black050,
  buttonRingActive: paletteColor.white100,
  loginBackground: 'transparent',
};
