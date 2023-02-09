import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { easeInOut, motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../utils/framer-motion/framer';

import './hero.styles.scss'


const Hero = () => {

    return (
        <header className='hero-section'>
            <AnimatePresence>
                <motion.div
                initial='hidden'
                whileInView='show'
                variants={fadeIn('up', 0)}
                viewport={{once: true}}
                className='hero-text-container'>
                    <motion.h1
                    initial='hidden'
                    whileInView='show'
                    variants={fadeIn('up', 0.1)}
                    viewport={{once: true}}
                    >Springboard Language Academy</motion.h1>
                    <motion.p
                    initial='hidden'
                    whileInView='show'
                    variants={fadeIn('up', 0.2)}
                    viewport={{once: true}}
                    >Bridge the communication gaps among nations through professional language trainings.</motion.p>
                    <motion.div
                    initial='hidden'
                    whileInView='show'
                    variants={fadeIn('up')}
                    viewport={{once: true}}
                    className='hero-buttons'>
                        <Link to='Register'><Button>Register Now</Button></Link>
                        <Link to='Contact'><Button buttonType={'defaultTrans'}>Contact Us</Button></Link>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </header>
    )
}

export default Hero;