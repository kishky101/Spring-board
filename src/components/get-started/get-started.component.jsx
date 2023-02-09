import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/framer-motion/framer';

import './get-started.styles.scss'

const GetStarted = () => {

    return(
        <div className='get-started-container'>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={scaleIn('up', 0.01)}
            viewport={{once: true}}
            className='get-started-text'>
                <h3>get started now!</h3>
                <p>Register for any of our interesting course now</p>
                <Link to='Register'>
                    <Button buttonType={'defaultWhite'} >Register Now</Button>
                </Link>
            </motion.div>
        </div>
    )
}

export default GetStarted;