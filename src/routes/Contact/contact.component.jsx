import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesHero from "../../components/routes-hero/routes-hero.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import GetInTouch from "../../components/get-in-touch/get-in-touch.component";
import { createUserRegistrationDocument } from "../../utils/firebase/firebase.utils";
import './contact.styles.scss'

const defaultFields = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
}

const Contact = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFields);

    const {firstName, lastName, email, number, message}  = formFields;
    const fullName = `${firstName} ${lastName}`
    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value, fullName})
    }

    const clearFormFields = () => setFormFields(defaultFields)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(!firstName || !lastName || !email || !number || !message) {
            alert('All fields are required')
            return
        }
        const userDocRef = createUserRegistrationDocument(formFields, 'Contact Form', undefined, 'fullName');
        clearFormFields()
        return navigate('/contact-successful')
    }

    return (
        <div className="contact-form-container">
            <RoutesHero />
            <div className="contact-form">
                <h2>Contact us now</h2>
                <p>You can leave us a message by filling the below form. You can also dial our hotline written below.</p>
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
                            label={'Email Address'}
                            type='email'
                            name='email'
                            required
                            value={email}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Tel. Number'}
                            type='tel'
                            name='number'
                            required
                            value={number}
                            onChange={onChangeHandler}
                        />
                        <div className="message-textarea">
                            <label>Message</label>
                            <textarea 
                                type='textarea'
                                name='message'
                                rows={5}
                                required
                                value={message}
                                onChange={onChangeHandler}
                            ></textarea> 
                        </div>


                        <Button onClick={onSubmitHandler} type='submit'>Send Message</Button>
                    </form>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Contact;