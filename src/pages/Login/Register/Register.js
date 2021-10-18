import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = ({ handleName, handleEmail, handlePassword, handleRegister }) => {
    return (
        <div>
            <Form onSubmit={handleRegister}>
                <h3>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                        (Optional)
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} required type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;