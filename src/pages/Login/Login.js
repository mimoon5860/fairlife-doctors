import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const [toggle, setToggle] = useState(false);


    const { user, googleSignIn } = useAuth();
    console.log(user)

    const handleToggle = event => {
        setToggle(event.target.checked);
    }






    return (
        <div>
            <div className="container">
                <div className="col-md-3 mx-auto my-md-5 p-3 my-3 border rounded form">

                    {!toggle ?
                        <Form>
                            <h3>Please Login</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                                <Form.Check onClick={handleToggle} type="checkbox" label="Dont have an account?" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        :
                        <Form>
                            <h3>Please Register</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                                <Form.Check onClick={handleToggle} type="checkbox" label="Dont have an account?" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    }
                    <div>
                        <button onClick={googleSignIn} className="px-3 py-1 border rounded mt-4"><i className="fab fa-google"></i> Login With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;