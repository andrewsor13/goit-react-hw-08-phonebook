import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchContacts } from '../redux/operations';
import { selectIsAuthentificated } from '../redux/selectors';

export default function PrivateRoutes() {
  const isAuth = useSelector(selectIsAuthentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuth]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
