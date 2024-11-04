import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {ref, get} from 'firebase/database';

export default function Redirectpage(){

    const { shortcode } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchOriginalLink = async () => {
            try {
                console.log(shortcode);
                console.log("Shortcode Type: ", typeof shortcode);
                const shortCodeRef = ref(db, 'web_id/{shortcode}');

                const snapshot = await get(shortCodeRef);
                
                if (snapshot.exists()) {
                    console.log("Data found, redirecting...");
                    const originalLink = snapshot.val();
                    window.location.href = originalLink;  // Redirect to the original link
                } else {
                    console.log("Shortcode not found in the database.");
                    setError(true);  // Set error state if the shortcode doesn't exist
                }
            } catch (error) {
                console.error("Error fetching URL:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchOriginalLink();  // Call the function when the component mounts
    }, [shortcode]);

    if(loading) {
        return <div> Loading...</div>;
    }
    if(error) {
        return <div>Shortcode not found or an error occured.</div>;
    }
    return null;

}