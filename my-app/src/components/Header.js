import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
    return ( 
        <div className='Header'>
            <NavLink to='/' className='Header_Logo'><img src={logo} alt=''/></NavLink>
            <div className="Header_Items">
                <NavLink to='/' className='Header_Item'>Home</NavLink>
                <NavLink to='/Projects' className='Header_Item'>Projects</NavLink>
                <NavLink to='/Contact' className='Header_Item'>Contact</NavLink>
            </div>
        </div>
     );
}
 
export default Header;