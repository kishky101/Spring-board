import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesHero from "../../components/routes-hero/routes-hero.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import GetInTouch from "../../components/get-in-touch/get-in-touch.component";
import { createUserRegistrationDocument } from "../../utils/firebase/firebase.utils";
import { about } from "../../utils/firebase/firebase.utils";

import './review.styles.scss'


const defaultFields = {
    firstName: '',
    lastName: '',
    occupation: '',
    image: '',
    review: ''
}

const Review = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFields)

    const {firstName, lastName, occupation, image, review}  = formFields;
    const fullName = `${firstName} ${lastName}`
    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value, fullName})
    }

    const imageHandler = (event) => {
        const file = event.target.files[0];
        console.log(file)
        return about(fullName, file)
    }

    const clearFormFields = () => setFormFields(defaultFields)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !review) {
            alert('All fields are required')
            return
        }
        
        const userDocRef = createUserRegistrationDocument(formFields, 'Testimonials', undefined, 'fullName');
        clearFormFields()
        return navigate('/successful')
    }

    return (
        <div className="contact-form-container">
            <RoutesHero />
            <div className="contact-form">
                <h2>Leave us a Review</h2>
                <p>You can leave us a review by filling the below form.</p>
                <div className="contact-form-fields">
                    <form>
                        <FormInput 
                            label={'First Name'}
                            type='text'
                            name='firstName'
                            required
                            value={firstName}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Last Name'}
                            type='text'
                            name='lastName'
                            required
                            value={lastName}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Occupation'}
                            type='text'
                            name='occupation'
                            value={occupation}
                            onChange={onChangeHandler}
                        />
                        <div className="image-area">
                            <label>Upload a profile Image (Optional)</label>
                            <input
                                type='file'
                                name='image'
                                id="image"
                                onChange={imageHandler}
                            />
                        </div>
                        <div className="message-textarea">
                            <label>Leave your review or testimonial</label>
                            <textarea 
                                type='textarea'
                                name='review'
                                rows={5}
                                required
                                value={review}
                                onChange={onChangeHandler}
                            ></textarea> 
                        </div>


                        <Button onClick={onSubmitHandler} type='submit'>Submit</Button>
                    </form>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Review;