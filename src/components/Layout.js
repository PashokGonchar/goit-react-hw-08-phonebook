import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, createTheme } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UsersBar from './UsersBar/UsersBar';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout() {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <UsersBar />
          <Suspense fallback={<div>Loading main content...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
