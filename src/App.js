import React from 'react';
import { useState } from "react";
import Counter from './components/Counter';
import './styles/App.css'


function App() {

  const [value, setValue] = useState('input text')





  return (
    <div className="App">
      
      
      <div className='post'>
        <div className='post-content'>
          <strong>1. Javascript</strong>
          <div> Javascript - programming langualge </div>

        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>

      </div>

      

    </div>
  );
}

export default App;
