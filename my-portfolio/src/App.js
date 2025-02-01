import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/homePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className={`App px-10 pt-10 ${darkMode ? 'dark' : 'light'}`}>
      <HomePage onToggle={toggleDarkMode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
