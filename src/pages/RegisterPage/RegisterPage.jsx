import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthentificated } from '../../redux/selectors';
import { register } from '../../redux/operations';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuthentificated);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ email: email, password: password }));
  };

  useEffect(() => {
    if (isAuth) navigate('/phonebook');
  }, [isAuth, navigate]);

  return (
    <Box
      component="form"
      sx={{
        margin: 'auto',
        width: '100%',
        maxWidth: '300px',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: '30px',
          color: 'black',
        }}
      >
        Register
      </Typography>
      <TextField
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        fullWidth
        onChange={handleChange}
      />
      <TextField
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        fullWidth
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
}
