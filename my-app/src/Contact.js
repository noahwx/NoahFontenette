import React from "react";
import { NavLink } from "react-router-dom";
import MailToBtn from "./components/MailToBtn";
import logo from './logo.svg';

const Contact = () => {

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
        <div>
            <div className="Desktop-wrapper">
                <h1 className="Desktop-Title1">Ways to Contact Me</h1>
                <div className="Desktop-Contact-Container">
                    <MailToBtn label="E-Mail" mailto="mailto:noahfontenette@outlook.com" />
                    <a href="https://twitter.com/noahf97" className="desktop-contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                    <a href="https://www.instagram.com/noahf.97/" className="desktop-contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                </div>
            </div>

            <div className="mobile-wrapper">
                <div className="mobile-container">
                    <div className="mobile-content2">
                        <h1 className="mobile-content-title">Ways to Contact</h1>
                        <div className="mobile-contact-container">
                            <MailToBtn label="E-Mail" mailto="mailto:noahfontenette@outlook.com" />
                            <a href="https://twitter.com/noahf97" className="mobile-contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                            <a href="https://www.instagram.com/noahf.97/" className="mobile-contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                        </div>
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
 
export default Contact;