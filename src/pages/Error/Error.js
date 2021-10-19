import React from 'react';
import "./Error.css"
import img from "../../images/error.png"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-bg">
            <div className="container pt-5 text-center">
                <div className="error col-md-4 pb-3 mx-auto my-5">
                    <img className="img-fluid" src={img} alt="" />
                    <br />
                    <Link className="btn btn-success" to="/"><i className="fas fa-home"></i> Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;