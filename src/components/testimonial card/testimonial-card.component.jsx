import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/framer-motion/framer';

import './testimonial-card.styles.scss'

const TestimonialCard = ({testimonialObj}) => {

    const {name, imageUrl,proffesion, testimony} = testimonialObj;
    return (
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={scaleIn('up', 0.1)}
        viewport={{once: true}}
        className='testimonial-card-container'>
            <div className='testimonial-card-img'>
                <img src={imageUrl} alt='testimonial Image' />
            </div>
            <div className='testimonial-card'>
                <div>
                    <h3>{name}</h3>
                    <span>{proffesion}</span>
                </div>
                <p>{testimony}</p>
            </div>
        </motion.div>
    )
}

export default TestimonialCard;