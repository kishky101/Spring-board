import { createContext, useState, useEffect } from "react";
import { getDocFromFirebase } from "../../utils/firebase/firebase.utils";
export const StaffContext = createContext({
    staff: [],
    setStaff: () => null
})

export const StaffProvider = ({children}) => {
    const [staff, setStaff] = useState(() => []);

    useEffect(() => {
        const reponse = getDocFromFirebase('staffs');
        reponse.then(data => setStaff(data.sort((a, b) => a.id - b.id)));
    }, [])

    const value = {staff}

    return <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
}