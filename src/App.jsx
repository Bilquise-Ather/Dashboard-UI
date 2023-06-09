import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import User from './pages/User';
import { ThemeProvider } from '@mui/material/styles';
import { getColorMode } from './themes/Theme';
import { useState, useMemo } from 'react';
import ThemeContext from './context/ThemeContext';
import UserRegister from './pages/UserRegister';

function App() {
  const [mode, setMode] = useState('light');
  // const colorMode = useMemo(
  //   () => ({
  //     mode,
  //     setMode,
  //   }),
  //   [mode]
  // );

  // Update the theme only if the mode changes
  const theme = useMemo(() => getColorMode(mode), [mode]);
  console.log(theme, 'theme');

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout Children={Home} />} />
            <Route path="/about" element={<BaseLayout Children={About} />} />
            <Route
              path="/settings"
              element={<BaseLayout Children={Settings} />}
            />
            <Route path="/user" element={<BaseLayout Children={User} />} />
            <Route
              path="/user-reg"
              element={<BaseLayout Children={UserRegister} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
