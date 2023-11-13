import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color:${(props) => props.theme.background};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
export default GlobalStyles;
