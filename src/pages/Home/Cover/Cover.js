import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img1 from '../../../images/casusel/img1.jpeg'
import img2 from '../../../images/casusel/img2.jpeg'
import img3 from '../../../images/casusel/img3.jpeg'
import img4 from '../../../images/casusel/img4.jpeg'
import img5 from '../../../images/casusel/img5.jpeg'

const Cover = () => {
    return (
        <div className="cover-wrapperw">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 p-3 rounded-3 cover-text">
                        <h1 className="mb-0 fw-bold">FairLife Doctors</h1>
                        <h3 className="pb-2 fw-bold">We care About Your Family</h3>
                        <hr />
                        <h4 className="py-2">Any Specialist You Need, You can come here and take an appointment of our Specialist doctor.</h4>
                        <a href="#doctors"><Button className='fw-bold' variant="success"><i className="far fa-calendar-check"></i> Take Appointment</Button></a>
                    </div>
                    <div className="col-md-8">
                        <Carousel variant="dark" className="m-md-5 m-2 carousel border border-3 rounded-3">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={img1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>We Have The Best Specialist</h5>
                                    <p>Take appoinment and meet with your specialist doctor.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={img2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5>Child Care</h5>
                                    <p>We Have best child specilist for your childreen</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={img3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Woman's Care</h5>
                                    <p>We Have Best Woman Specialist</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={img4}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>We Research</h5>
                                    <p>We Research About Your Problems</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={img5}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Therapy Specialist</h5>
                                    <p>We have the best therapy specialist</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;