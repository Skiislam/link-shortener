import { useLocation, useNavigate } from "react-router-dom";
import { setDatabase } from '../components/database';
import { ref, get, onValue } from "firebase/database";
import { db } from "../firebase";
import { Navigate } from "react-router-dom";
import { nanoid } from 'nanoid'
import { useEffect, useState } from "react";

export default function Shortcode_redirect(){
    const location = useLocation();
    const userWebsite = location.state
    // const [shortCodeExists, setShortCodeExists] = useState(false);
    const [shortCode, setShortCode] = useState(localStorage.getItem('shortCode') || null);
    const navigate = useNavigate();
    useEffect(() => {
       if (!shortCode) 
        {
        const newShortCode = nanoid(10);
        const shortCodeRef = ref(db,'web_id/{newShortCode}');
        
        get(shortCodeRef).then((snapshot) => {
            if(!snapshot.exists()) {
                setDatabase(newShortCode,userWebsite);
                setShortCode(newShortCode)
                localStorage.setItem('shortCode', newShortCode)
            }
        
        });
    }
    },[]);
 
const handleGohome = () => {
    localStorage.removeItem('shortCode');
    setShortCode(null);
    navigate('/');
}
    return (
       <div> 
        <h1>
            SHORT CODE REDIRECT
            {userWebsite}
        </h1>
        <p>Your Shortened link is: www.testshort.com/{shortCode}</p>
        <p> Ready to go back to home: </p>
        <button onClick={handleGohome}>Home</button>

        </div> 
    );
}

