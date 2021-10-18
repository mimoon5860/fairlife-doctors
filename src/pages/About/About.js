import React from 'react';
import "./About.css"
import img from "../../images/owner.jpg"
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="container">
                <div>
                    <div className="pt-5 text-white border-bottom border-3">
                        <h3 className="fw-bold">About FairLife Doctor's</h3>
                        <p>FairLife Doctor's is an online health care hospital for patients and their families and friends.</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 my-4 pe-md-5">
                            <div className="p-3 me-md-5 text-white text-center my-2 my-md-3 about-card rounded-3 border">
                                <h4>General information about FairLife Doctor's</h4>
                                <Link className="text-white" to="/">Description & History</Link>
                            </div>
                            <div className="p-3 me-md-5 text-white text-center my-2 my-md-3 about-card rounded-3 border">
                                <h4>Using FairLife Doctor's</h4>
                                <Link className="text-white" to="/">Policies, training, & help</Link>
                            </div>
                            <div className="p-3 me-md-5 text-white text-center my-2 my-md-3 about-card rounded-3 border">
                                <h4>Information for Developers</h4>
                                <Link className="text-white" to="/">Web service, data files, & linking</Link>
                            </div>
                            <div className="p-3 me-md-5 text-white text-center my-2 my-md-3 about-card rounded-3 border">
                                <h4>Subscribe to E-mail Updates</h4>
                                <Link className="text-white" to="/">Newsletter, website updates, & more</Link>
                            </div>
                        </div>
                        <div className="col-md-6 px-md-5 my-4">
                            <div className="border my-3 p-4 info-bg rounded">
                                <p>FairLife Doctor's is a service of the National Library of Hospital (NLM), the world's largest specialist, which is part of the National Institutes of Health (NIH).</p>
                                <p>Our mission is to present high-quality, relevant health and wellness information that is trusted, easy to understand, and free of advertising, in both English and Spanish. Anywhere, anytime, on any device—for free.</p>
                            </div>
                            <div className=" my-3 about-owner rounded my-2 p-3 my-md-0 text-center border p-md-4">
                                <p className="fw-bold">Welcome from NLM Director Patricia Flatley Brennan, RN, PhD</p>
                                <img className="m-3 img-fluid rounded" src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;