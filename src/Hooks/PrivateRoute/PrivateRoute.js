import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../useAuth';
import "./Spinner.css"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // Loading for wait until load user data from firebase
    if (isLoading) {
        return (
            <div className="spinner-bg">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center pt-5">
                        <Spinner animation="border" variant="warning" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
            }
        >
        </Route>
    );
};

export default PrivateRoute;