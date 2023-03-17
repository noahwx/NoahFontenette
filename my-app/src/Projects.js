import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.svg';

const Projects = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        setOpen(false);
    };
    
    const handleMenuTwo = () => {
        setOpen(false);
    };

    const handleMenuThree = () => {
        setOpen(false);
    };

    return ( 
        <div className="wrapper">


            <div className="mobile-wrapper">
                <div className="mobile-container">
                    <div className="mobile-content1">
                        <h1 className="mobile-content-title1">Projects</h1>
                    </div>
                </div>
                <div>
                    <div className='mobile-menu'>
                        <h4 className="mobile-btn-etcs">Menu</h4>
                        <div className='menu-btn'>
                            <img src={logo} alt='' onClick={handleOpen} className='mobile-btn'/>
                        </div>

                        {open ? (
                            <div className='mobile-Nav'>
                                <div className='mobile-NavItems'>
                                    <NavLink to='/' className='mobile-NavItem' onClick={handleMenuOne}>Home</NavLink>
                                    <NavLink to='/Projects' className='mobile-NavItem' onClick={handleMenuTwo}>Projects</NavLink>
                                    <NavLink to='/Contact' className='mobile-NavItem' onClick={handleMenuThree}>Contact</NavLink>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;