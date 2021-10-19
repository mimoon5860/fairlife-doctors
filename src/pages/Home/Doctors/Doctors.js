import React from 'react';
import { Row } from 'react-bootstrap';
import Fetch from '../../../Hooks/Fetch/Fetch';
import ShowDoctor from './ShowDoctor/ShowDoctor';

const Doctors = () => {
    const doctors = Fetch();
    return (
        <div className="doctors-wrapper py-4" id="doctors">
            <h2 className="text-center text-white pt-5 pb-2 text-uppercase border-bottom border-3 fw-bold">Doctor's</h2>
            <div className='container pt-3'>
                <Row xs={1} sm={2} md={4} className="g-4" >
                    {doctors.map(doctor => <ShowDoctor key={doctor.id} doctor={doctor}></ShowDoctor>)}
                </Row>
            </div>
        </div >
    );
};

export default Doctors;