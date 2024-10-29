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
    const [shortCodeExists, setShortCodeExists] = useState(false);
    const navigate = useNavigate();
    const newShortCode = nanoid(10);
    useEffect(() => {
        const shortCodeRef = ref(db,'web_id/{newShortCode}');
        onValue(shortCodeRef, (snapshot) => {
            if(snapshot.exists()) {
                setShortCodeExists(true);
            }
            else {
                setShortCodeExists(false);
                setDatabase(newShortCode,userWebsite);
            }
        });
    },[]);
 

    return (
       <div> 
        <h1>
            SHORT CODE REDIRECT
            {userWebsite}
        </h1>
        <p> Ready to go back to home: </p>
        <button onClick={() => {navigate ('/')}}>Submit</button>

        </div> 
    );
}

