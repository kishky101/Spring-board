import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './get-in-touch.styles.scss'

const GetInTouch = () => {

    return (
        <div className='get-in-touch-container'>
            <div className='get-in-touch-header'>
                <h3>Get in touch with us</h3>
            </div>
            <div className='get-in-touch-details-container'>
                <div className='get-in-touch-details'>
                    <span className='get-in-touch-span'>
                        <FontAwesomeIcon icon={faEnvelope} className='get-in-touch-icon' />
                        Springboardconcept@gmail.com
                    </span>
                    <span className='get-in-touch-span'>
                        <FontAwesomeIcon icon={faLocationDot} className='get-in-touch-icon' />
                        Falomo Police Barrack, Ikoyi, Lagos
                    </span>
                    <span className='get-in-touch-span'>
                        <FontAwesomeIcon icon={faPhone} className='get-in-touch-icon' />
                        +2348033938927
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;