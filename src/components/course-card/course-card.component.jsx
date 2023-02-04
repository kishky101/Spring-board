import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

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
                <button>
                    
                    <FontAwesomeIcon icon={faCirclePlus} className='expand' />
                    <FontAwesomeIcon icon={faCircleMinus} className='collapse' />
                    <input type={'checkbox'} className='expand-button' />
                </button>   
            </div>
            
        </div>
    )
}

export default CourseCard;