import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { signInWithGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/admin"


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div>
            <h2>Hi!!! Want to Login?</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Login with Google!</button>
        </div>
    );
};

export default Login;