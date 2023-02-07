import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { scaleIn } from "../../utils/framer-motion/framer";
import './course-card.styles.scss'

const CourseCard = ({course}) => {
    const [icon, setIcon] = useState({})
    const {courseName, iconClass, courseIntro} = course;

    useEffect(() => {
        import("@fortawesome/free-solid-svg-icons").then((res) => setIcon(res[iconClass]));
    })
       
    return (
        <motion.div
        layout='size'
        initial='hidden'
        whileInView='show'
        variants={scaleIn('up', 0.1)}
        viewport={{once: false}}
        className='course'>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={icon} className='icon'/>
            </div>
            <h2 className='courseTitle'>{courseName}</h2>  
            <div className="demo-div">
                <p className='courseIntro'>{courseIntro}</p>
                <button>
                    
                    <FontAwesomeIcon icon={faCirclePlus} className='expand' />
                    <FontAwesomeIcon icon={faCircleMinus} className='collapse' />
                    <input type={'checkbox'} className='expand-button' />
                </button>   
            </div>
            
        </motion.div>
    )
}

export default CourseCard;