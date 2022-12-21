import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './course-card.styles.scss'
const CourseCard = ({course}) => {
    const {courseName, iconClass, courseIntro} = course;

    return (
        <div className='course'>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={iconClass} className='icon'/>
            </div>
            <h2 className='courseTitle'>{courseName}</h2>
            <p className='courseIntro'>{courseIntro}</p>
        </div>
    )
}

export default CourseCard;