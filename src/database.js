import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export function setDatabase(new_link, original_link, duration) {
    const reference = ref(db, 'web_id/' + new_link);
    
    set (reference, {
        original_link: original_link,
        time: duration
    });
}

