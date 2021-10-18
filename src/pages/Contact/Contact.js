import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-bg">
            <div className="container">
                <div className="text-white border-bottom border-2 pt-3 d-flex flex-md-row flex-column align-items-center justify-content-between">
                    <h3 className="mb-0 ">Contact FairLife Doctor's</h3>
                    <div className="d-flex text-success icons m-4 gap-md-5 gap-3">
                        <i className="fas fa-sms"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-youtube-square"></i>
                    </div>
                </div>
                <div className="row mt-4 mt-md-0 gap-5">
                    <div className="text-white py-md-5 col-md-7">
                        <div className="border-bottom">
                            <p><span className="fw-bold">Address:</span>  417 S. East Street, P. O. Box 305, Corydon, IA 50060-3050 </p>

                            <p><span className="fw-bold">Telephone:</span> 641.872.2260 | Fax: 641.872.1329</p>
                            <p>FairLife Doctors Hospital is located 65 miles directly south of Des Moines in south central Iowa. The largest neighboring towns are Chariton in Lucas County, 17 miles north; Centerville in Appanoose County, 25 miles east; and Leon, in Decatur County, 25 miles to the west. Wayne County Hospital is 12 miles north of the Iowa / Missouri state line.</p>
                        </div>
                        <div className="my-4 p-3 rounded contact-form">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="Number" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Name" />
                                </Form.Group>
                                <Form.Label>Your Massage</Form.Label>
                                <FloatingLabel className="text-dark" controlId="floatingTextarea2" label="Your massage">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Type Your massage here"
                                        style={{ height: '150px' }}
                                    />
                                </FloatingLabel>
                                <Button className="mt-3" variant="primary">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-4 text-white my-md-5">
                        <div>
                            <h3 className="text-success">FairLife Doctor's Hospital Direct Dial Department Number</h3>
                            <p>For your convenience the FairLife Doctor's Hospital has setup the following departmental phone numbers so you may dial the department directly to schedule an appointment or make an inquiry: +1965-857-6358</p>
                        </div>
                        <div>
                            <h1 className="fw-bold text-warning my-md-5">Ambulance – In case of an emergency dial 911</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;