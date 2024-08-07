import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmail, sendEmailClient } from '../../utils/emailJS/emailJS.utils';
import RoutesHero from '../../components/routes-hero/routes-hero.component';
import FormInput from '../../components/form-input/form-input.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import Button from '../../components/button/button.component';
import { createUserRegistrationDocument } from '../../utils/firebase/firebase.utils';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import { motion } from 'framer-motion';
import { scaleIn, fadeIn } from '../../utils/framer-motion/framer';
import Checkbox from '../../components/checkboxes/checkboxes.component';
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
    const navigate = useNavigate();
    const form = useRef()
    const [formFields, setFormFields] = useState(defaultFields)
    
    const {firstName, lastName, email, number, background, internet, days, agreement, sponsor}  = formFields;
    const fullName = firstName + ' ' + lastName
    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value, fullName})
    }

    const clearFormFields = () => setFormFields(defaultFields)

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if(!firstName || !lastName || !email || !number || !background || !internet || !days || !agreement || !sponsor) {
            alert('All fields are required')
            return
        }
        await createUserRegistrationDocument(formFields, 'Registeration', undefined, 'fullName')
        clearFormFields()
        await sendEmail(formFields)
        await sendEmailClient(formFields)
        return navigate("/payment")
    }


    return (
        <div className="register-form-container">
            <ProgressBar />
            <RoutesHero />
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('up', 0)}
            viewport={{once: true}}
            className="register-form">
                <h2>Register Now</h2>
                <p>SpringBoard Language Academy Arabic Online Registeration Form.</p>
                <span className='register-span'>COURSE DURATION - (13 WEEKS)</span>
                <span style={{textAlign: 'center', width: '100%', marginTop: '30px', display: 'block'}}>Kindly fill all fields as all fields are required *</span>
                <motion.div
                initial='hidden'
                whileInView='show'
                variants={scaleIn('up', 0)}
                viewport={{once: true}}
                className="register-form-fields">
                    <form ref={form} onSubmit={sendEmail}>
                        <FormInput 
                            label={'First Name*'}
                            type='text'
                            name='firstName'
                            required
                            value={firstName}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Last Name*'}
                            type='text'
                            name='lastName'
                            required
                            value={lastName}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={'Email Address*'}
                            type='email'
                            name='email'
                            required
                            value={email}
                            onChange={onChangeHandler}
                        />
                        <FormInput 
                            label={' WhatsApp Number*'}
                            type='tel'
                            name='number'
                            required
                            value={number}
                            onChange={onChangeHandler}
                        />
                        <label className='register-label' htmlFor = 'arabic-background'>Background in Arabic
                        * </label>
                            <Checkbox 
                                label={'Basic - I want to start from the scratch'}
                                type='radio'
                                name='background'
                                id = 'basic'
                                required
                                value={'Basic - I want to start from the scratch'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'Intermediate - I can only read Qur\'an'}
                                type='radio'
                                name='background'
                                id = 'intermidiate'
                                required
                                value={'Intermediate - I can only read Qur\'an'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'Advance - I can read any Arabic text, but I want to learn more'}
                                type='radio'
                                name='background'
                                id = 'advance'
                                required
                                value={'Advance: I can read any Arabic text, but I want to learn more'}
                                onChange={onChangeHandler}
                            />
                    
                        <label className='register-label' htmlFor = 'internet'>Access to Internet
                        *</label>
                            <Checkbox 
                                label={'Excellent'}
                                type='radio'
                                name='internet'
                                id = 'excellent'
                                required
                                value={'Excellent'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'very-good'}
                                type='radio'
                                name='internet'
                                id = 'good'
                                required
                                value={'very-good'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'fair'}
                                type='radio'
                                name='internet'
                                id = 'fair'
                                required
                                value={'fair'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'poor'}
                                type='radio'
                                name='internet'
                                id = 'poor'
                                required
                                value={'poor'}
                                onChange={onChangeHandler}
                            />
                        
                        <label className='register-label' htmlFor = 'days'>Which Option do you prefer? * </label>
                            <Checkbox 
                                label={'WEEKDAYS - Mondays - Wednesdays'}
                                type='radio'
                                name='days'
                                id = 'weekdays'
                                value={'WEEKDAYS - Mondays - Wednesdays'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'WEEKENDS - Saturdays and Sundays'}
                                type='radio'
                                name='days'
                                id = 'weekend'
                                value={'WEEKENDS - Saturdays and Sundays'}
                                onChange={onChangeHandler}
                            />
                            <Checkbox 
                                label={'WEEKDAYS - Thursdays and Fridays (For Basic Classes only)'}
                                type='radio'
                                name='days'
                                id = 'thur-fri'
                                value={'WEEKDAYS - Thursdays and Fridays (For Basic Classes only)'}
                                onChange={onChangeHandler}
                            />
                        
                        <FormInput 
                            label={'SPONSOR*'}
                            type='text'
                            name='sponsor'
                            required
                            value={sponsor}
                            onChange={onChangeHandler}
                        />
                        <label className='register-label' htmlFor='agreement'>* I understand that I will have to pay N40,000/term OR $60  OR 55 Euro OR 50 UK pound/term to  confirm  my registration to any of the accounts below:  </label>
                            <Checkbox 
                                label={'YES'}
                                type='checkbox'
                                name='agreement'
                                id = 'agree'
                                required
                                value={'YES'}
                                onChange={onChangeHandler}
                            />
                    


                        <Button onClick ={onSubmitHandler} type='submit'>SUBMIT</Button>
                    </form>
                    <span style={{textAlign: 'right', width: '100%', marginTop: '30px', display: 'block'}} onClick={clearFormFields}>clear form</span>
                </motion.div>
            </motion.div>

            <GetInTouch />
        </div>
    )
}

export default Register;