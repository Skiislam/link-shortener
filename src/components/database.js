import {ref, set } from "firebase/database";
import { db } from "../firebase";


export function setDatabase(new_link, original_link, duration) {
    const reference = ref(db, 'web_id/' + new_link);
    
    set (reference, {
        original_link: original_link,
    });
}

