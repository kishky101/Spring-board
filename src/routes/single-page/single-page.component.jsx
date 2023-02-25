import { useContext } from "react";
import { CourseContext } from "../../context/courses/courses.context";
import Hero from "../../components/hero/hero.component";
import OurPrograms from "../../components/our-programs/our-programs.component";
import AboutUs from "../../components/about-us/about-us.component";
import CourseContainer from "../../components/course-container/course-container.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import GetStarted from "../../components/get-started/get-started.component";
import GetInTouch from "../../components/get-in-touch/get-in-touch.component";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import "./single-page.styles.scss";
import CourseCard from "../../components/course-card/course-card.component";
import CourseCard2 from "../../components/course-card/course-card2.component";
import Spinner from "../../components/spinner/spinner.component";
const Page = () => {
  const course = useContext(CourseContext);
  const { courses } = course;

  return (
    <div className="general-container">
      <ProgressBar />
      <Hero />
      <OurPrograms />
      <AboutUs />
      <CourseContainer>
        {courses.filter(course => course.id < 7).map((course) => {
          if (course.id !== 6) {
            return <CourseCard course={course} key={course.id} />
          }else {
            return <CourseCard2 course={course} key={course.id} />
          }
          
        })}
      </CourseContainer>
      <Testimonials />
      <GetStarted />
      <GetInTouch />
    </div>
  );
};

export default Page;
