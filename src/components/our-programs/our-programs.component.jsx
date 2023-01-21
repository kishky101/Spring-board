

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './our-programs.styles.scss'

const OurPrograms = () => {

    return (
        <div className='our-program-container'>
            <div className='our-program-header'>
                <h2>our <span>programs</span></h2>
            </div>
            <div className='our-program-schedule-container'>
                <div className='our-program-schedule'>
                    <div className = 'program-icon-container'>
                        <FontAwesomeIcon icon={faCalendarDays} className = 'our-program-icon' />
                    </div>
                    <div className='our-program-description'>
                        <h3>weekdays program</h3>
                        <p>Online classes on <span>Mondays to Wednesdays</span></p>
                    </div>
                </div>
                <div className='our-program-schedule'>
                    <div className = 'program-icon-container'>
                        <FontAwesomeIcon icon={faCalendarXmark} className = 'our-program-icon' />
                    </div>
                    <div className='our-program-description'>
                        <h3>weekend program</h3>
                        <p>Online classes on <span>Saturdays and Sundays</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPrograms;