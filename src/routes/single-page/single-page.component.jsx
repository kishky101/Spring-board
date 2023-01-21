import Navigation from '../Navigation/navigation.component';
import Hero from '../../components/hero/hero.component';
import OurPrograms from '../../components/our-programs/our-programs.component';
import AboutUs from '../../components/about-us/about-us.component';
import CourseContainer from '../../components/course-container/course-container.component';
import CourseCard from '../../components/course-card/course-card.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import GetStarted from '../../components/get-started/get-started.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import courses from '../../courses';
import Footer from '../../components/footer/footer.component';
import './single-page.styles.scss';
import SwiperCopy from '../../components/swiper-copy/swiper-copy';
import TestimonialCard from '../../components/testimonial card/testimonial-card.component';

const Page = () => {

    return (
        <div className='general-container'>
            {/*<Navigation />*/}
            <Hero />
            <OurPrograms />
            <AboutUs />
            <CourseContainer>
                {courses.map(course => <CourseCard course={course} key={course.id}/> )}
            </CourseContainer>
            {/*<TestimonialCard />*/}
    {/*<SwiperCopy />*/}
            <Testimonials />
            <GetStarted />
            <GetInTouch />
            <Footer />
        </div>
        
    )
}

export default Page;