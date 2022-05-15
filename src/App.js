import './App.css';
import React, { Component }  from 'react';
import Create from './components/create-client';
import Read from './components/read-client';
//import Update from './components/update';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
        
          
        
        
          <Route exact path='/read-client' component={Read} />
          <Route path="/" element={<div>Default Page Content</div>} />
          <Route path="/create-client" element={<Create/>} />  
        
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;