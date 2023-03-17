import React, { useState, useEffect } from "react";
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

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
          setTheme('dark');
      } else {
          setTheme('light');
      }
    };

    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);

    return (
        <div>

            <div className="mobile-wrapper">
                <div className={`App ${theme}`}>
                    <div className='mobile-menu'>
                        <div className='menu-btn'>
                            <img src={logo} alt='' onClick={handleOpen} className='mobile-btn'/>
                        </div>

                        {open ? (
                            <div className='mobile-Nav'>
                                <div className='mobile-NavItems'>
                                    <NavLink to='/' className='mobile-NavItem' onClick={handleMenuOne}>Home</NavLink>
                                    <NavLink to='/Projects' className='mobile-NavItem' onClick={handleMenuTwo}>Projects</NavLink>
                                    <NavLink to='/Contact' className='mobile-NavItem' onClick={handleMenuThree}>Contact</NavLink>
                                    <NavLink onClick={toggleTheme} className='mobile-NavItem'>Toggle Theme</NavLink>
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