import { createContext, useState, useEffect } from "react";
import { getDocFromFirebase } from "../../utils/firebase/firebase.utils";

export const CourseContext = createContext({
    courses: [],
    setCourses: () => null
})

export const CourseProvider = ({children}) => {
    const [courses, setCourses] = useState(() => []);

    useEffect(() => {
        const reponse = getDocFromFirebase('courses');
        reponse.then(data => setCourses(data.sort((a, b) => a.id - b.id)));
    }, [])

    const value = {courses};

    return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
} 