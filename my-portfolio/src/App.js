import React, { useState } from 'react';
import './App.css';
import HomePage from './components/homePage';





function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  

  return (
    <div className={`App px-12 pt-10 ${darkMode ? 'dark' : 'light'}`}> 
     <HomePage onToggle={toggleDarkMode}/>
    
    </div>
  );
}

export default App;
