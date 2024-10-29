import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import { setDatabase } from './database';

function shortcode(){
  const value= nanoid(10);;
  return value 
}
function App() {
  const test = shortcode();
  const [userWebsite, setUserWebsite] = useState();
  const [inputVar, setInputVar] = useState();
  const returnText = (event) => {
    event.preventDefault();
    const newShortcode = shortcode();
    setDatabase(newShortcode, inputVar, 10)
    
 }

  return (
    <container> 
      <h1>
        Test Page
      </h1>
      <p> Website to shorten: </p>
      <input id='userWebsite' type='text' placeholder='Enter Website' onChange={(e) => setInputVar(e.target.value)} />
      <button onClick={returnText}>Submit</button>
    </container>
  );
}


export default App;
