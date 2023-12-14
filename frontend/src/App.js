
import './App.css';
import Root from './pages/Root';
import React, { useState, useEffect } from 'react';

function App() {

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // const spanStyles = Array.from({ length: 4 }, (_, i) => ({
  //   ['--i']: i,
  // }));
  
  return (

    <div className="App">
      {/* {
        loading?
        <div className="cube div">
        <div className="top div"></div>
        <div className="div">
          {spanStyles.map((style, index) => (
            <span key={index} className="span" style={style}>
              <p>loading..</p>
              <p>loading..</p>
            </span>
          ))}
        </div>
      </div>
        : */}

      
      
        <Root></Root>
      
      {/* } */}
    </div>
  );
}

export default App;
