import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      const usersWithId = parsedData.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      setUsers(usersWithId);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={users} columns={columns} pageSize={5} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default User;
