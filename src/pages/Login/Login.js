import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import SignIn from './Login/SignIn';
import Register from './Register/Register';

const Login = () => {
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log(location.state.from)

    const { user, googleSignIn, emailRegister, emailSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setError("");
                history.push(redirect_uri)
            }).catch((error) => {
                setError(error.message);
            });
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        emailRegister(email, password)
            .then((userCredential) => {
                history.push(redirect_uri)
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    const handleSignIn = (event) => {
        event.preventDefault();
        emailSignIn(email, password)
            .then((userCredential) => {
                history.push(redirect_uri)
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            });
    }







    const handleToggle = event => {
        setToggle(event.target.checked);
    }






    return (
        <div className="login-bg">
            <div className="container py-5">

                {user.email ? <div><h1>You Already Logged in.</h1></div> :
                    <div className="col-md-3 mx-auto my-md-5 p-3 my-3 border rounded form">

                        {!toggle ?
                            <SignIn handleEmail={handleEmail} handlePassword={handlePassword} handleSignIn={handleSignIn}></SignIn>
                            :
                            <Register handleEmail={handleEmail} handlePassword={handlePassword} handleRegister={handleRegister}></Register>
                        }
                        <div>
                            {error && <p className="text-danger">{error}</p>}
                            <Form.Check className="my-3" onClick={handleToggle} type="checkbox" label="Dont have an account?" />
                            <button onClick={handleGoogleSignIn} className="px-3 py-1 border rounded mt-2"><i className="fab fa-google"></i> Login With Google</button>
                        </div>
                    </div>

                }

            </div>

        </div>
    );
};

export default Login;