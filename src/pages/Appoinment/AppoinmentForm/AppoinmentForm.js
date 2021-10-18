import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AppoinmentForm = ({ handleAppoinment }) => {
    return (
        <Form className="p-3 rounded appoinment-form" onSubmit={handleAppoinment}>
            <h2>Appoinment Form</h2>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control required type="number" placeholder="Enter Your Number" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Date</Form.Label>
                    <Form.Control required placeholder="Ex: 11-7-2021" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Day</Form.Label>
                    <Form.Select required defaultValue="day">
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Time</Form.Label>
                    <Form.Control required placeholder="Ex: 430 pm" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Advance Payment?" />
            </Form.Group>

            <Button variant="primary" type="submit">
                <i className="fas fa-check-circle "></i> Fix Appointment
            </Button>
        </Form>
    );
};

export default AppoinmentForm;