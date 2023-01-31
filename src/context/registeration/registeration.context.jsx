import { createContext, useState, useEffect } from "react";
import { getDocFromFirebase } from "../../utils/firebase/firebase.utils";

export const RegisterationContext = createContext({
    register: [],
    setRegister: () => null
})

export const RegisterationProvider = ({children}) => {
    const [register, setRegister] = useState(() => []);

    useEffect(() => {
        const reponse = getDocFromFirebase('Registeration');
        reponse.then(data => setRegister(data.sort((a, b) => a.createdAt - b.createdAt)));
    }, [])

    const value = {register}

    return <RegisterationContext.Provider value={value}>{children}</RegisterationContext.Provider>
}