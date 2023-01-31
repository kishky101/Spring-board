import { createContext, useState, useEffect } from "react";
import { getDocFromFirebase } from "../../utils/firebase/firebase.utils";

export const ContactContext = createContext({
    contacts: [],
    setContacts: () => null
})

export const ContactProvider = ({children}) => {
    const [contacts, setContacts] = useState(() => []);

    useEffect(() => {
        const reponse = getDocFromFirebase('Contact Form');
        reponse.then(data => setContacts(data.sort((a, b) => a.createdAt - b.createdAt)));
    }, [])

    const value = {contacts}

    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}