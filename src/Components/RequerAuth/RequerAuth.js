import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init.';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth(app);
const RequireAuth = ({children}) => {
const [user] = useAuthState(auth)
const location = useLocation();
if(!user){
    return <Navigate to="/singin" state={{from : location}} replace></Navigate>
}

    return children;
};

export default RequireAuth;