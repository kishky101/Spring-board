import { useContext } from 'react';
import { CourseContext } from '../../context/courses/courses.context';
import Hero from '../../components/hero/hero.component';
import OurPrograms from '../../components/our-programs/our-programs.component';
import AboutUs from '../../components/about-us/about-us.component';
import CourseContainer from '../../components/course-container/course-container.component';
import CourseCard from '../../components/course-card/course-card.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import GetStarted from '../../components/get-started/get-started.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import './single-page.styles.scss';

const Page = () => {

        
    const course = useContext(CourseContext);
    const {courses} = course


    return (
        <div className='general-container'>
            <ProgressBar />
            <Hero />
            <OurPrograms />
            <AboutUs />
            <CourseContainer>
                {courses.map(course => <CourseCard course={course} key={course.id}/> )} 
            </CourseContainer>
            <Testimonials />
            <GetStarted />
            <GetInTouch />
        </div>
        
    )
}

export default Page;