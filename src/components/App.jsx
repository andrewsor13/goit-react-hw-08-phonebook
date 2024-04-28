import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import PrivateRoutes from 'routes/PrivateRoutes';
import UserMenu from './UserMenu/UserMenu';

export default function App() {
  return (
    <div>
      <UserMenu />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/phonebook" element={<PhonebookPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
