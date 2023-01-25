import { Link } from 'react-router-dom';
import Button from '../button/button.component';

import './get-started.styles.scss'

const GetStarted = () => {

    return(
        <div className='get-started-container'>
            <div className='get-started-text'>
                <h3>get started now!</h3>
                <p>Register for any of our interesting course now</p>
                <Link to='Register'>
                    <Button buttonType={'defaultWhite'} >Register Now</Button>
                </Link>
            </div>
        </div>
    )
}

export default GetStarted;