import React from 'react';
import './App.css';
import Navbar from './Components/navbar'
import Content from './Components/Content';

function App() {
  return (
    <div>
      <div className="header">
          <h1 className="title">Tables</h1>
          <p className='tagLine'>A perfect pairing to your sofa</p>
      </div>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
