import RoutesHero from '../../components/routes-hero/routes-hero.component';
import CourseContainer from '../../components/course-container/course-container.component';
import CourseCard from '../../components/course-card/course-card.component';
import courses from '../../courses';
import './courses.styles.scss'

const Courses = () => {
    return (
        <div>
            <RoutesHero />
            <div>
                    <CourseContainer>
                    {courses.filter(course => course.id != 6).map(course => <CourseCard course={course} key={course.id}/> )}
                </CourseContainer>
            </div>
        </div>
    )
}

export default Courses;