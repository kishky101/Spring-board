import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/framer-motion/framer';

import './staff-card.styles.scss'



const StaffCard = ({staffObj}) => {
    const {name, imageUrl, description} = staffObj;

    return (
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={scaleIn('up', 0)}
        viewport={{once: true}}
        className='staff-card-container'>
            <div className='staff-card-img'>
                <img src={imageUrl} alt='staff Image' />
            </div>
            <div className='staff-card'>
                <div>
                    <h3>{name}</h3>
                </div>
                <p>{description}</p>
            </div>
        </motion.div>
    )
}

export default StaffCard;