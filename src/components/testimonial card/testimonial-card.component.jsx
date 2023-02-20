import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/framer-motion/framer';

import './testimonial-card.styles.scss'

const TestimonialCard = ({testimonialObj}) => {

    const {fullName, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtQY4XgXm3IWNY5Zfu6a9IGjupJuHFZpAS_VuUmLBBzihM2TSpdjaWXpsn3DmXaVb65o&usqp=CAU', occupation, review} = testimonialObj;
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
                    <h3>{fullName}</h3>
                    <span>{occupation}</span>
                </div>
                <p>{review}</p>
            </div>
        </motion.div>
    )
}

export default TestimonialCard;