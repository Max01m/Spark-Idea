import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
