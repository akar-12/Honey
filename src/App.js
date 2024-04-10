import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <Routes> 
        <Route exact path='/' element={<Home/>} />
        
      </Routes>
    </Router>
  );
};

export default App;