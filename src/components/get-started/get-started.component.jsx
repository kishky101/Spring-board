import Button from '../button/button.component';

import './get-started.styles.scss'

const GetStarted = () => {

    return(
        <div className='get-started-container'>
            <div className='get-started-text'>
                <h3>get started now!</h3>
                <p>Register for any of our interesting course now</p>
                <Button buttonType={'defaultWhite'} >Register Now</Button>
            </div>
        </div>
    )
}

export default GetStarted;