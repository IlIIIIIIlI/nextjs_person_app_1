import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Callum Bir Next Demo App</Typography>
        </Toolbar>
      </AppBar>
      {/* Add spacing below the AppBar */}
      <div style={{ marginTop: '20px' }}></div>
      <Container style={{ flex: 1 }}>{children}</Container>
      <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
        &copy; Callum Bir 2023
      </footer>
    </div>
  );
};

export default Layout;
