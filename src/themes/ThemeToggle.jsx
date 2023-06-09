import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button, Switch } from '@mui/material';

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState('dark'); // initial theme mode

  const toggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    //   <CssBaseline />
    //   <div>
    //     <Button variant="outlined" onClick={toggleTheme}>
    //       {themeMode === 'light'
    //         ? 'Switch to Dark Mode'
    //         : 'Switch to Light Mode'}
    //     </Button>
    //     {/* <Switch onClick={() => setThemeMode(!themeMode)}></Switch> */}
    //   </div>
    {
      /* <Home /> */
    }
  );
};

export default ThemeToggle;
