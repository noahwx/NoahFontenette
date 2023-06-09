import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './index.css';

const Home = () => {

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
                <div className="Home-Info">
                    <h1 className="Desktop-Title">Noah Fontenette</h1>
                    <hr/>
                    <p className="Desktop-Subtitle">
                        Hi, I'm Noah Fontenette, a web developer and data analyst with five years of experience.<br/>I'm proficient in <strong>HTML, CSS, JavaScript, Python, and Excel</strong>.<br/>I also enjoy staying up to date with the latest web development trends and data analysis techniques.
                    </p>
                </div>
            </div>

            <div className="mobile-wrapper">
                <div className="mobile-container">
                    <div className="mobile-content">
                        <h1 className="mobile-content-title">Noah Fontenette</h1>
                        <hr className="hr-home"/>
                        <p className="mobile-content-subtitle">Analyst & Developer</p>
                    </div>
                    <div className="mobile-about-me">
                        <p className="mobile-about-p">Hi, there. I am an experienced Data Analyst and Front End Developer who focuses on new and innovative ways to accomplish a task.</p>
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
 
export default Home;