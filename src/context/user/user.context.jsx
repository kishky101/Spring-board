import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                 setUser(user)
            } 
        })

        return unSubscribe
    }, [])

    const value = {user};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}