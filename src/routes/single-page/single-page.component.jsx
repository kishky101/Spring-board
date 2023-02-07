
import Hero from '../../components/hero/hero.component';
import OurPrograms from '../../components/our-programs/our-programs.component';
import AboutUs from '../../components/about-us/about-us.component';
import CourseContainer from '../../components/course-container/course-container.component';
import CourseCard from '../../components/course-card/course-card.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import GetStarted from '../../components/get-started/get-started.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import './single-page.styles.scss';

const Page = () => {

    return (
        <div className='general-container'>
            <Hero />
            <OurPrograms />
            <AboutUs />
            <CourseContainer />
            <Testimonials />
            <GetStarted />
            <GetInTouch />
        </div>
        
    )
}

export default Page;