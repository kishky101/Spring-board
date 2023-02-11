import { useContext } from 'react';
import { CourseContext } from '../../context/courses/courses.context';
import RoutesHero from '../../components/routes-hero/routes-hero.component';
import CourseContainer from '../../components/course-container/course-container.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import CourseCard from '../../components/course-card/course-card.component';
import './courses.styles.scss'

const Courses = () => {

    const course = useContext(CourseContext);
    const {courses} = course

    return (
        <div>
            <ProgressBar />
            <RoutesHero />
            <div>
                    <CourseContainer>
                        {courses.filter(course => course.id != 6).map(course => <CourseCard course={course} key={course.id}/> )}
                    </CourseContainer>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Courses;