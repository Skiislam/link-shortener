import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [inputVar, setInputVar] = useState();
  const navigate = useNavigate();


  return (
    <container> 
      <h1>
        Test Page
      </h1>
      <p> Website to shorten: </p>
      <input id='userWebsite' type='text' placeholder='Enter Website' onChange={(e) => setInputVar(e.target.value)} />
      <button onClick={() => {navigate ('/Shortcode_redirect', {state : inputVar})}}>Submit</button>
    </container>
  );
}


