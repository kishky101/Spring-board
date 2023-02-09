import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/framer-motion/framer';

import './get-in-touch.styles.scss'

const GetInTouch = () => {

    return (
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={fadeIn('up', 0)}
        viewport={{once: true}}
        className='get-in-touch-container'>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('down', 0.01)}
            viewport={{once: true}}
            className='get-in-touch-header'>
                <h3>Get in touch with us</h3>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('up', 0.02)}
            viewport={{once: true}}
            className='get-in-touch-details-container'>
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
            </motion.div>
        </motion.div>
    )
}

export default GetInTouch;