import './course-container.styles.scss';

const CourseContainer = ({children}) => {
    return (
        <div className='course-container'>
            <h2 className='course-header'>Our courses</h2>
            <p className='course-description'>We offer interesting courses</p>
            <div className='course-wrapper'>
                {children}
            </div>
        </div>
        
    )
}

export default CourseContainer