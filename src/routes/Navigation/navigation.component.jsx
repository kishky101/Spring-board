import { Link, Outlet } from "react-router-dom";
import Button from "../../components/button/button.component";
import { faXmark, faBars, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './navigation.styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <div className='logo'>
                    <Link to='/'>
                        <h2><span className='logo-first'>Spring</span><span className='logo-last'>Board</span></h2>
                    </Link>
                    <button class="hamburger-icon">
                        <label for="dropdown">
                            <FontAwesomeIcon icon={faBars} className = 'nav-icon fa-bars' />
                            <FontAwesomeIcon icon={faXmark} className = 'nav-icon fa-xmark' />
                           {/* <FontAwesomeIcon icon={faAngleUp} className = 'nav-icon fa-angle-up' />
                                <FontAwesomeIcon icon={faAngleDown} className = 'nav-icon fa-angle-down' />*/}
                        </label>
                        <input type="checkbox" id="dropdown" />
                    </button>
                </div>
                <div className='nav-links'>
                    <Link className='nav-link' to='About'>About Us</Link>
                    <Link className='nav-link' to='Programs'>Programs</Link>
                    <Link className='nav-link' to='Courses'>Courses</Link>
                    <Link className='nav-link staff' to='Staff'>Staffs</Link>
                    <Link className='nav-link contact' to='Contact'>Contact Us</Link>
                    <Link className='nav-link' to='Register'>
                        <Button children={'Register'} buttonType='register' type='button'/>
                    </Link>
                </div>   
            </div>
            <Outlet />
            
        </>
    )
}

export default Navigation;