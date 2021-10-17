import React from 'react';
import Cover from './Cover/Cover';
import Doctors from './Doctors/Doctors';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <Doctors></Doctors>

        </div>
    );
};

export default Home;