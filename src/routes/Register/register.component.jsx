import { useState } from 'react';
import RoutesHero from '../../components/routes-hero/routes-hero.component';
import FormInput from '../../components/form-input/form-input.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import Button from '../../components/button/button.component';
import './register.styles.scss'

const defaultFields = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    background: '',
    internet: '',
    days: '',
    sponsor: '',
    agreement: ''
}

const Register = () => {

    const [formFields, setFormFields] = useState(defaultFields)
    
    const {firstName, lastName, email, number, message, sponsor}  = formFields;

    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formFields)
    }

    return (
        <div className="contact-form-container">
        <RoutesHero />
        <div className="contact-form">
            <h2>Register Now</h2>
            <p>ARABIC ONLINE COURSE REGISTRATION FORM.</p>
            <span>COURSE DURATION - (13 WEEKS)</span>
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
                        label={'Tel. Number (Preferably WhatsApp no)'}
                        type='tel'
                        name='number'
                        required
                        value={number}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor = 'arabic-background'>Background in Arabic
                    *
                        <FormInput 
                            label={'Basic - I want to start from the scratch'}
                            type='radio'
                            name='background'
                            id = 'basic'
                            required
                            value={'Basic - I want to start from the scratch'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Intermediate - I can only read Qur\'an'}
                            type='radio'
                            name='background'
                            id = 'intermidiate'
                            required
                            value={'Intermediate - I can only read Qur\'an'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Advance: I can read any Arabic text, but I want to learn more'}
                            type='radio'
                            name='background'
                            id = 'advance'
                            required
                            value={'Advance: I can read any Arabic text, but I want to learn more'}
                            onChange={onChangeHandler}
                        />
                    </label>
                    <label htmlFor = 'internet'>Access to Internet
                    *
                        <FormInput 
                            label={'Excellent'}
                            type='radio'
                            name='internet'
                            id = 'excellent'
                            required
                            value={'Excellent'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'very-good'}
                            type='radio'
                            name='internet'
                            id = 'good'
                            required
                            value={'very-good'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'fair'}
                            type='radio'
                            name='internet'
                            id = 'fair'
                            required
                            value={'fair'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'poor'}
                            type='radio'
                            name='internet'
                            id = 'poor'
                            required
                            value={'poor'}
                            onChange={onChangeHandler}
                        />
                    </label>
                    <label htmlFor = 'days'>Which Option do you prefer? *
                        <FormInput 
                            label={'WEEKDAYS - Mondays - Wednesdays'}
                            type='checkbox'
                            name='days'
                            id = 'weekdays'
                            value={'WEEKDAYS - Mondays - Wednesdays'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'WEEKENDS - Saturdays and Sundays'}
                            type='checkbox'
                            name='days'
                            id = 'weekend'
                            value={'WEEKENDS - Saturdays and Sundays'}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'WEEKDAYS - Thursdays and Fridays (For Basic Classes only)'}
                            type='checkbox'
                            name='days'
                            id = 'thur-fri'
                            value={'WEEKDAYS - Thursdays and Fridays (For Basic Classes only)'}
                            onChange={onChangeHandler}
                        />
                    </label>
                    <FormInput 
                        label={'SPONSOR*'}
                        type='text'
                        name='sponsor'
                        required
                        value={sponsor}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor='agreement'>I understand that I will have to pay N20,000/term OR $50  OR 45 Euro OR 40 UK pound/term to  confirm  my registration to any of the accounts below:
                        <FormInput 
                            label={'YES'}
                            type='checkbox'
                            name='agreement'
                            id = 'agree'
                            required
                            value={'YES'}
                            onChange={onChangeHandler}
                        />
                    </label>


                    <Button onClick ={onSubmitHandler} type='submit'>SUBMIT</Button>
                </form>
            </div>
        </div>
        <GetInTouch />
    </div>
    )
}

export default Register;