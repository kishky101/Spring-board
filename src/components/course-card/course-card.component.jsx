import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import './course-card.styles.scss'
const CourseCard = ({course}) => {
    const [icon, setIcon] = useState({})
    const {courseName, iconClass, courseIntro} = course;

    useEffect(() => {
        import("@fortawesome/free-solid-svg-icons").then((res) => setIcon(res[iconClass]));
    })
       
    return (
        <div className='course'>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={icon} className='icon'/>
            </div>
            <h2 className='courseTitle'>{courseName}</h2>  
            <div className="demo-div">
                <p className='courseIntro'>{courseIntro}</p>
                <input type={'checkbox'} className='expand-button' />
            </div>
            
        </div>
    )
}

export default CourseCard;