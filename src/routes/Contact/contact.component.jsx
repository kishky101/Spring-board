import { useState } from "react";
import RoutesHero from "../../components/routes-hero/routes-hero.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import GetInTouch from "../../components/get-in-touch/get-in-touch.component";
import './contact.styles.scss'

const defaultFields = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
}

const Contact = () => {
    const [formFields, setFormFields] = useState(defaultFields)

    const {firstName, lastName, email, number, message}  = formFields;

    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
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


                        <Button type='submit'>Send Message</Button>
                    </form>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Contact;