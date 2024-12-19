import {backgroundColor, createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 26,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    buttonLabel:{
      fontSize: 16,
      lineHeight: 24,
    },
    bold:{
      fontWeight: 'bold',
    },
    defaults: {
    },
  },
  cardVariants:{
    defaults:{
      margin: "xl",
      alignSelf:"stretch",
      backgroundColor:"mainBackground",
      borderRadius:"l",
      padding:"l"
    }
  },
  borderRadii:{
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
  }
});

export type Theme = typeof theme;
export default theme;