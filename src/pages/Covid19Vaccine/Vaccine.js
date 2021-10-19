import React from 'react';
import { Button } from 'react-bootstrap';
import "./vaccine.css"
import img from "../../images/vaccine.png"
import { Link } from 'react-router-dom';

const Vaccine = () => {
    return (
        <div className="vaccine-bg">
            <div className="container pt-5">
                <div className="vaccine rounded my-5 d-flex flex-md-row flex-column justify-content-around">
                    <div className="p-4">
                        <h2 className="fw-bold text-white pb-3 border-bottom border-5">Getting Your Vaccine</h2>
                        <div className="d-flex pt-3 ps-md-3 flex-column gap-4">
                            <Button className="border-white text-white" variant="outline-success">What different vaccines are available?</Button>
                            <Button className="border-white text-white" variant="outline-success">Are they safe?</Button>
                            <Button className="border-white text-white" variant="outline-success">What are possible side effects?</Button>
                            <Button className="border-white text-white" variant="outline-success">What if I am immunocompromised?</Button>
                            <Button className="border-white text-white" variant="outline-success">Should I get vaccinated if I've had COVID-19?</Button>
                        </div>
                    </div>
                    <div className="my-5 p-2 mx-2 rounded bg-white">
                        <div className="d-flex ps-4 justify-content-between">
                            <h2 className="pt-4 fw-bold">Get Vaccinated</h2>
                            <img width="100px" src={img} alt="" />
                        </div>
                        <div className="px-2 px-md-5 py-3 fw-bold">
                            <h5 className="pb-4">Find a free COVID-19 vaccine near you.</h5>

                            <Link to="/"><i className="fas fs-4 pe-2 fa-search"></i>Find a vaccine near you</Link>

                            <p className="py-3 mb-0"><i className="fas  fs-4 pe-2  fa-phone"></i>Call 1-800-XXX-XXXX </p>

                            <p><i className="fas fs-4 pe-2 fa-envelope-open-text"></i>Text your zip code to 43XXXX</p>

                            <small>Message & data rates may apply. <Link to="/vaccine">CDC Privacy Policy</Link></small>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-4 flex-md-row vaccine-card justify-content-between pb-5">
                    <div className="d-flex flex-column align-items-center">
                        <i className="far i py-3 fa-list-alt"></i>
                        <h3 className="fw-bold mb-0">Your Vaccination</h3>
                        <div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Bust myths and learn facts
                                </p>
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Frequently asked questions</p>
                            </div>
                            <div className="d-flex  mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Prepare for your vaccination</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fas i py-3  fa-band-aid"></i>

                        <h3 className="mb-0 fw-bold">After Vaccination</h3>
                        <div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Get your vaccination card
                                </p>
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Register for v-safe
                                </p>
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">When you’ve been fully vaccinated</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fas i py-3 fa-users"></i>
                        <h3 className="fw-bold mb-0">For Specific Groups</h3>
                        <div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Immunocompromised
                                </p>
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Children and teens
                                </p>
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <i className="fas me-2 fa-chevron-right"></i>
                                <p className="mb-0">Specific groups
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vaccine;