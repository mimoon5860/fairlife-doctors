import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container text-white flex-column pt-3 flex-md-row d-flex justify-content-between align-items-center">
                <div>
                    <div className="fw-bold d-flex">
                        <ul>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                            <Link to="/"><li>Services</li></Link>
                            <Link to="/"><li>Privacy Policy</li></Link>
                        </ul>
                        <ul>
                            <Link to="/"><li>Medical Staff</li></Link>
                            <Link to="/"><li>Patients & Visitors</li></Link>
                            <Link to="/"><li>Community</li></Link>
                            <Link to="/"><li>Terms & Conditions</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                    <div className="w-50 mx-auto py-3">
                        <h5 className="text-success">FairLife Doctors</h5>
                        <hr />
                        <p>
                            417 S. East Street
                            Corydon, Iowa 50060
                            Phone: 641.872.2260
                        </p>
                    </div>
                </div>

                <div>
                    <p>&copy; Copyrigh Protected 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;