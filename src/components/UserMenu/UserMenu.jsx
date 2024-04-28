import { Avatar, Box, Button, Chip } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthentificated, selectUser } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/operations';

export default function UserMenu() {
  const isAuth = useSelector(selectIsAuthentificated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box
      sx={{ display: 'flex', margin: '20px auto', justifyContent: 'center' }}
    >
      {isAuth ? (
        <>
          <Chip
            avatar={<Avatar>{user.user.email[0].toUpperCase()}</Avatar>}
            label={user.user.email}
          />
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </Button>
        </>
      )}
    </Box>
  );
}
