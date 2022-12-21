import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import CourseCard from "../../components/course-card/course-card.component";
import courses from "../../courses";
import './navigation.styles.scss'

const course = {
    courseName: 'Al-Qur\'an & Al-Tajweed',
    iconClass: faMicrophone,
    courseIntro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus ex, ipsum modi a corrupti eos quo necessitatibus maxime quas recusandae vero eum dicta praesentium nemo cum vel explicabo ab!'
}
const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <div className='logo'>
                    <Link to='/'>
                        <h2><span className='logo-first'>Spring</span><span className='logo-last'>Board</span></h2>
                    </Link>
                </div>
                <div className='nav-links'>
                    <Link className='nav-link' to='About'>About Us</Link>
                    <Link className='nav-link' to='Programs'>Programs</Link>
                    <Link className='nav-link' to='Courses'>Courses</Link>
                    <Link className='nav-link' to='Staff'>Staffs</Link>
                    <Link className='nav-link' to='Contact'>Contact Us</Link>
                    <Link className='nav-link' to='Register'>
                        <Button children={'Register'} buttonType='register' type='button'/>
                    </Link>
                </div>   
            </div>
            <Outlet />
            <div className='course-wrapper'>
                {courses.map(course => <CourseCard course={course} key={course.id}/> )}
            </div>
        </>
    )
}

export default Navigation;