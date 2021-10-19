import React, { useState } from 'react';
import "./Appoinment.css"
import { useParams } from 'react-router';
import Fetch from '../../Hooks/Fetch/Fetch';
import AppoinmentForm from './AppoinmentForm/AppoinmentForm';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appoinment = () => {
    const [appoinment, setAppoinment] = useState(false);
    const { id } = useParams();
    const data = Fetch();

    const doctor = data.find(doctor => doctor.id === id);

    const handleAppoinment = (event) => {
        event.preventDefault();
        if (appoinment) {
            setAppoinment(false);
        } else {
            setAppoinment(true);
        }
    }
    console.log(appoinment)

    return (
        <div className="appoinment-bg">
            <div className="container py-5">
                <div className="appoinment-cover p-4 align-items-center d-flex flex-column flex-md-row justify-content-around  text-white">
                    <div className="cover-details mb-md-0 mb-4">
                        <h2>{doctor?.name}</h2>
                        <hr />
                        <h4><span className="fw-bold">Speciality: </span>{doctor?.specialty}</h4>
                        <h4><span className="fw-bold">Certifications: </span>{doctor?.certifications}</h4>
                        <h4><span className="fw-bold">Graduated: </span>{doctor?.graduate}</h4>
                        <h5><span className="fw-bold">Weekly Schedule: </span>{doctor?.schedule}</h5>
                        <p>{doctor?.time}</p>
                        <hr />
                        <h3>Appoinment Charge: ${doctor?.charge}</h3>
                        <h4><i className="text-success fas fa-circle"></i> Accepting New Patients</h4>
                        <NavLink className="btn border fw-bold" href="#appoinment-form">Take Appoinment</NavLink>
                    </div>
                    <div>
                        <img className="img-fluid rounded" src={doctor?.img} alt="" />
                    </div>
                </div>
                <div className="row text-white my-5">
                    <div className="col-md-6 p-3 px-md-5">
                        <h3 className="text-success">About {doctor?.name}</h3>
                        <p>{doctor?.details}</p>
                    </div>
                    <div className="col-md-6 p-2 px-md-5" id="appoinment-form">
                        {appoinment ?
                            <div className="py-5 px-3 px-md-5 rounded appoinment-form">
                                <h2 className="py-2"><i className="fas fa-check-circle text-success"></i>  Thank You for Take an Appoinment</h2>
                                <h3 className="py-3"><i className="fas text-warning fa-recycle"></i>  Appoinment Processing!</h3>
                                <p>We will let you know when it will be confirm... <i className="far text-success fa-smile"></i></p>
                                <Link className="btn m-2 btn-success" to="/home"><i className="fas fa-home"></i> Back to Home</Link>
                                <button className="btn m-2 btn-warning" onClick={handleAppoinment}><i className="fas fa-edit"></i> Edit Your Appoinment</button>
                            </div>
                            :
                            <AppoinmentForm handleAppoinment={handleAppoinment}></AppoinmentForm>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;