import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './index.css';
import DarkMode from './dark-mode.png';

// Version 0.1.100

function App() {

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
    <>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme} className='theme-btn'>
          <img src={DarkMode} alt=''/>
        </button>
        <button onClick={toggleTheme} className='mobile-theme-btn'>
          <img src={DarkMode} alt=''/>
        </button>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
