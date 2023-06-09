import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';

const UserRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingData = localStorage.getItem('userData');
    let newData = [];
    if (existingData) {
      newData = JSON.parse(existingData);
    }
    newData.push(data);
    localStorage.setItem('userData', JSON.stringify(newData));
    console.log(data, 'data');
  };

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Registration Form</h1>
              <div className="ui divider"></div>
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Enter User Name"
                    {...register('userName', {
                      required: 'Username is required',
                    })}
                  />
                  {errors.userName && (
                    <p style={{ color: 'red' }}>{errors.userName.message}</p>
                  )}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    {...register('email', {
                      required: 'E-mail is required',
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                  )}
                </div>

                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Password cannot exceed 20 characters',
                      },
                    })}
                  />

                  {errors.password && (
                    <p style={{ color: 'red' }}>{errors.password.message}</p>
                  )}
                </div>
                <button className="fluid ui button blue" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default UserRegister;
