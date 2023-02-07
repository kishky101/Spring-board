

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
//import { Variants } from 'framer-motion';
import { fadeIn } from '../../utils/framer-motion/framer';

import './our-programs.styles.scss'

const OurPrograms = () => {

    return (
        <AnimatePresence>
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={fadeIn('up', 0)}
        viewport={{once: false}}
        className='our-program-container'>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('down', 0.1)}
            viewport={{once: false}}
            className='our-program-header'>
                <h2>our <span>programs</span></h2>
            </motion.div>
            <div className='our-program-schedule-container'>
                <motion.div
                initial='hidden'
                whileInView='show'
                variants={fadeIn('left', 0.1)}
                viewport={{once: false}}
                className='our-program-schedule'>
                    <div className = 'program-icon-container'>
                        <FontAwesomeIcon icon={faCalendarDays} className = 'our-program-icon' />
                    </div>
                    <div className='our-program-description'>
                        <h3>weekdays program</h3>
                        <p>Online classes on <span>Mondays to Fridays</span></p>
                    </div>
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='show'
                variants={fadeIn('right', 0.1)}
                viewport={{once: false}}
                className='our-program-schedule'>
                    <div className = 'program-icon-container'>
                        <FontAwesomeIcon icon={faCalendarXmark} className = 'our-program-icon' />
                    </div>
                    <div className='our-program-description'>
                        <h3>weekend program</h3>
                        <p>Online classes on <span>Saturdays and Sundays</span></p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default OurPrograms;