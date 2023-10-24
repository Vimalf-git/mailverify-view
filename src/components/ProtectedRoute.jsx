
import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProtectedRoute({children}) {
const token=sessionStorage.getItem('token');
if(!token){
    sessionStorage.clear();
    toast.error('Login then try to access')
}
  return token?children:<Navigate to='/'/>
}

export default ProtectedRoute