import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowDoctor from './ShowDoctor/ShowDoctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log(doctors)
    return (
        <div className="doctors-wrapper" id="doctors">
            <h2 className="text-center pt-5 pb-2 text-uppercase border-bottom border-3 fw-bold">Doctor's</h2>
            <div className='container pt-3'>
                <Row xs={1} md={4} className="g-4" >
                    {doctors.map(doctor => <ShowDoctor key={doctor.id} doctor={doctor}></ShowDoctor>)}
                </Row>
            </div>

        </div >
    );
};

export default Doctors;