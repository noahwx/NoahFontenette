import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';
import Contact from '../Contact';

const Main = () => {
    return ( 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Projects' element={<Projects />} />
            <Route exact path='/Contact' element={<Contact />} />
        </Routes>
     );
}
 
export default Main;