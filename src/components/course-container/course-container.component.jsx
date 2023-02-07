import { useContext } from 'react';
import { CourseContext } from '../../context/courses/courses.context';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/framer-motion/framer';
import CourseCard from '../course-card/course-card.component';
import './course-container.styles.scss';

const CourseContainer = () => {

    
    const course = useContext(CourseContext);
    const {courses} = course

    return (
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={fadeIn('up', 0)}
        viewport={{once: true}}
        className='course-container'>
            <h2 className='course-header'>Our courses</h2>
            <p className='course-description'>We offer interesting courses</p>
            <motion.div
            layout='position'
            className='course-wrapper'>
                {courses.map(course => <CourseCard course={course} key={course.id}/> )}
            </motion.div>
        </motion.div>
        
    )
}

export default CourseContainer