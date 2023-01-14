import Navigation from '../Navigation/navigation.component';
import Hero from '../../components/hero/hero.component';
import AboutUs from '../../components/about-us/about-us.component';
import CourseContainer from '../../components/course-container/course-container.component';
import CourseCard from '../../components/course-card/course-card.component';
import courses from '../../courses';

import './single-page.styles.scss';

const Page = () => {

    return (
        <div className='general-container'>
            <Navigation />
            <Hero />
            <AboutUs />
            <CourseContainer>
                {courses.map(course => <CourseCard course={course} key={course.id}/> )}
            </CourseContainer>
        </div>
        
    )
}

export default Page;