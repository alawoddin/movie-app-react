import React from 'react';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div>NavBar</div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: isMobile ? 'red' : 'blue',
          }}
        >
          {/* toolbar content */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
