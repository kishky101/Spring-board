import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignInUserWithEmailAndPassword, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';

const defaultFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFields);
    const [user, setUser] = useState(null)

    const {email, password} = formFields;

    const onChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const clearFormFields = () => setFormFields(defaultFields)

    const signInonSubmitHandler = async (event) => {
        if (!email || !password) return;
        event.preventDefault()
        try {
            const { user } = await SignInUserWithEmailAndPassword(email, password)
            clearFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password')
                    break;
                case 'auth/user-not-found':
                    alert('No user assosiated with this email')
                    break;
                default :
                    console.log(error)
                
            }
        }
        
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                 setUser(user)
                 navigate('/admin/register-list')
            }
           
        })

        return unSubscribe
    }, [])

    return (
        <div className='sign-in-container'>
            <div className='sign-in-description'>
                <h3>Admin Sign In</h3>
                <p>Enter your Email and Password</p>
            </div>
            <div className='admin-sign-in'>
            <form>
                <FormInput 
                    label={'Email*'}
                    type='email'
                    name='email'
                    required
                    value={email}
                    onChange={onChangeHandler}
                />
                <FormInput 
                    label={'Password*'}
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={onChangeHandler}
                />
            </form>
            <Button onClick= {signInonSubmitHandler} type='submit'>Sign in</Button>
            </div>

        </div>
    )
}

export default SignIn;