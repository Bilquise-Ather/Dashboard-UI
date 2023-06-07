import React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dashboard.css';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StorageIcon from '@mui/icons-material/Storage';
import TourIcon from '@mui/icons-material/Tour';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashStyle">
            <DashboardIcon />
            <span>Dashboard</span>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 47 + '%', height: 190 }}
                  className="gradient"
                >
                  <CardContent>
                    <ShowChartIcon sx={{ color: 'white', marginTop: '15px' }} />
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      Stock Total
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      $150000
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white', marginTop: '20px' }}
                    >
                      Increased by 60%
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ minWidth: 47 + '%', height: 190 }}
                  className="gradient2"
                >
                  <CardContent>
                    <StorageIcon sx={{ color: 'white', marginTop: '15px' }} />
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      Total Profit
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      $25000
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white', marginTop: '20px' }}
                    >
                      Increased by 30%
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 47 + '%', height: 190 }}
                  className="gradient3"
                >
                  <CardContent>
                    <TourIcon sx={{ color: 'white', marginTop: '15px' }} />
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      Total Visitors
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white', marginTop: '20px' }}
                    >
                      250000
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      Increased by 80%
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
