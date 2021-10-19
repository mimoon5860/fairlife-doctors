import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDoctor = ({ doctor }) => {
    const { name, id, img, specialty, schedule, time, charge } = doctor;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img className="px-3 pt-3 rounded-circle" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fw-bold p-">{name}</Card.Title>
                    <Card.Title className=" p-"><span>Speciality: </span>{specialty} </Card.Title>
                    <Link to={`/appoinment/${id}`}><Button className='fw-bold' variant="success"><i className="far fa-calendar-check"></i>  Appointment</Button></Link>
                    <hr />
                    <div>
                        <h5>Appointment Charge: ${charge}</h5>
                        <h5>Time Schedule: {schedule}, {time}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowDoctor;