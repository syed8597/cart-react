import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import Hello from './component/Hello';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Textutil-Darkmode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Textutil-Lightmode';
    }
  };

  return (
   
      <>
        {/* <Router> */}
        <Navbar text="Textutils" Home="Home" About="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm/>
      
        
        <div className="container my-3">
          {/* <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/TextForm" element={<TextForm />} />
            <Route path="/" element={<TextForm />} />
          </Routes> */}
        </div>
        {/* </Router> */}
      </>
  
  );
}

export default App;
