import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import SignIn from './Login/SignIn';
import Register from './Register/Register';

const Login = () => {
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const { user, setIsLoading, googleSignIn, emailRegister, updateUser, emailSignIn } = useAuth();


    // Handle google sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setError("");
                history.push(redirect_uri)
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // handle user input 
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }


    // handle email password reg 
    const handleRegister = (event) => {
        event.preventDefault();
        if (password.length >= 6) {
            emailRegister(email, password)
                .then((userCredential) => {
                    history.push(redirect_uri)
                    setError("")
                    updateUser(name)
                        .then(() => {

                        }).catch((error) => {
                            setError(error?.massage)
                        });
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false)
                });

        }
        else {
            setError("Password must be six length")
        }
    }


    // handle email pass login 
    const handleSignIn = (event) => {
        event.preventDefault();
        if (password.length >= 6) {
            emailSignIn(email, password)
                .then((userCredential) => {
                    history.push(redirect_uri)
                    setError("")
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => setIsLoading(false));
        } else {
            setError("Password must be six length")
        }
    }


    // toggle for login register 
    const handleToggle = event => {
        setToggle(event.target.checked);
        setError("")
    }


    return (
        <div className="login-bg py-5">
            <div className="container py-5">

                {user.email ?
                    <div className="py-5 text-center">
                        <h1 className=" text-success py-5">You Already Logged in!</h1>
                        <Link className="btn btn-success" to="/"><i className="fas fa-home"></i> Back To Home</Link>
                    </div>
                    :
                    <div className="col-md-3 mx-auto my-md-5 p-3 my-3 border rounded form">

                        {!toggle ?
                            <SignIn handleEmail={handleEmail} handlePassword={handlePassword} handleSignIn={handleSignIn}></SignIn>
                            :
                            <Register handleName={handleName} handleEmail={handleEmail} handlePassword={handlePassword} handleRegister={handleRegister}></Register>
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