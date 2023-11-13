import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '../constants/DefaultTheme';
import GlobalStyles from '../../styles/GlobalStyles';
import { ScrollProvider } from './ScrollProvider';

const Layout = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <ScrollProvider>
        <GlobalStyles />
        <Header setTheme={setTheme} />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </ScrollProvider>
    </ThemeProvider>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
