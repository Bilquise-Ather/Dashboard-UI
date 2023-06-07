import React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  );
};

export default About;
