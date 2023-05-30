import { DefaultTheme } from "styled-components";

export const paletteColor = {
  primary900: "#DE5617",
  primary800: "#E86E1A",
  primary700: "#EF7E1C",
  primary600: "#F68D1F",
  primary500: "#FA9821",
  primary400: "#FBA735",
  primary300: "#FCB756",
  primary200: "#FDCC85",
  primary100: "#FDE0B5",
  primary050: "#FEF3E1",
  grey900: "#212225",
  grey800: "#424347",
  grey700: "#616266",
  grey600: "#75767A",
  grey500: "#9E9FA4",
  grey400: "#BDBEC3",
  grey300: "#E0E1E6",
  grey200: "#EEEEF3",
  grey100: "#F4F5FA",
  grey050: "#F9FAFF",
  grey800A: "#424347E5",
  grey700A: "#616266E5",
  grey600A: "#75767AE5",
  danger900: "#BF0003",
  danger800: "#CD0015",
  danger700: "#DA091D",
  danger600: "#EB1D22",
  danger500: "#FA2C21",
  danger400: "#F64341",
  danger300: "#EC6968",
  danger200: "#F59492",
  danger100: "#FFCACE",
  danger050: "#FFEAED",
  black900: "#000000",
  black800: "#000000E6",
  black700: "#000000CC",
  black600: "#000000B3",
  black500: "#00000099",
  black400: "#00000080",
  black300: "#00000066",
  black200: "#0000004D",
  black100: "#00000033",
  black050: "#0000001A",
  black025: "#0000000D",
  white900: "#FFFFFF",
  white800: "#FFFFFFE6",
  white700: "#FFFFFFCC",
  white600: "#FFFFFFB3",
  white500: "#FFFFFF99",
  white400: "#FFFFFF80",
  white300: "#FFFFFF66",
  white200: "#FFFFFF4D",
  white100: "#FFFFFF33",
  white050: "#FFFFFF1A",
  white025: "#FFFFFF0D",
  white900A: "#FFFFFFE5",
  secondary900: "#273DB4",
  secondary800: "#265ED3",
  secondary700: "#2570E6",
  secondary600: "#2183FA",
  secondary500: "#1791FF",
  secondary400: "#39A1FF",
  secondary300: "#5EB2FF",
  secondary200: "#BBDDFF",
  secondary100: "#BBDDFF",
  secondary050: "#E3F2FF",
};

export const lightMode: DefaultTheme = {
  background: paletteColor.grey050,
  shadow: paletteColor.black025,
  border: paletteColor.black050,
  card: paletteColor.white900,
  divider: paletteColor.black100,
  inputDanger: paletteColor.danger300,
  Text: paletteColor.black800,
  Brand: paletteColor.primary600,
  footer: paletteColor.grey200,
  cardHeader: paletteColor.white900A,
  subText: paletteColor.black400,
  chatBackground: paletteColor.grey200,
  chatBubble: paletteColor.white900,
  footerText: paletteColor.black500,
  footerSubText: paletteColor.black200,
  header: paletteColor.white900A,
  input: paletteColor.white900,
  button: paletteColor.white900,
  toolButton: paletteColor.grey100,
  chatSelfText: paletteColor.secondary600,
  headerButtonHover: paletteColor.grey200,
  mentionText: paletteColor.secondary600,
};
export const darkMode: DefaultTheme = {
  background: paletteColor.grey900,
  shadow: paletteColor.black025,
  border: paletteColor.white050,
  card: paletteColor.grey800,
  divider: paletteColor.white100,
  inputDanger: paletteColor.danger400,
  Text: paletteColor.white900,
  Brand: paletteColor.primary500,
  footer: paletteColor.black900,
  cardHeader: paletteColor.grey700A,
  subText: paletteColor.white600,
  chatBackground: paletteColor.grey800,
  chatBubble: paletteColor.grey700,
  footerText: paletteColor.white500,
  footerSubText: paletteColor.white300,
  header: paletteColor.grey800A,
  input: paletteColor.grey900,
  button: paletteColor.grey700,
  toolButton: paletteColor.grey800,
  chatSelfText: paletteColor.secondary500,
  headerButtonHover: paletteColor.grey700,
  mentionText: paletteColor.secondary500,
};
