import { Link } from 'react-router-dom'
import Button from '../button/button.component'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/framer-motion/framer'
import './about-us.styles.scss'

const AboutUs = () => {
    return (
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={fadeIn('up', 0)}
        viewport={{once: false}}
        className='about-us'>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('left', 0.1)}
            viewport={{once: false}}
            className='about-us-img-container'>
                <img src='https://i.postimg.cc/kMwWCzc3/about-us-img.png' alt='about-us-img' className='about-us-img' />
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('right', 0.1)}
            viewport={{once: false}}
            className='about-us-texts'>
                <div className='about-us-text-wrapper'>
                    <h2 className='about-us-header'>About us</h2>
                    <h3 className='about-us-header2'>We have mordern and seasoned tutors</h3>
                    <p className='about-us-description'>Springboard Language Academy is a reputable online language academy that offers international language services ranging from training, translation, communication among other related activities...
                    <Link style={{color: 'black', textDecoration: 'underline', fontSize: '14px'}} to='About'>Read More</Link>
                    </p>
                    <div>
                        <Link to='Register'>
                            <Button>Register Now</Button>  
                        </Link>     
                    </div>

                </div>   
            </motion.div>
           
        </motion.div>
    )
}

export default AboutUs