import { createContext, useState, useEffect } from "react";
import { getDocFromFirebase } from "../../utils/firebase/firebase.utils";
export const TestimonialContext = createContext({
    testimonial: [],
    setTestimonial: () => null
})

export const TestimonialProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState(() => []);

    useEffect(() => {
        const reponse = getDocFromFirebase('Testimonials');
        reponse.then(data => setTestimonial(data.sort((a, b) => a.id - b.id)));
    }, [])

    const value = {testimonial}

    return <TestimonialContext.Provider value={value}>{children}</TestimonialContext.Provider>
}