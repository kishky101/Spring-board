import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import { faXmark, faBars, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './navigation.styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
    const [checked, setChecked] = useState(false);

    const openNav = () => setChecked(true)
    const closeNav = () => setChecked(false)

    return (
        <div className="nav-container">
            <div className='navigation'>
                <div className='logo'>
                    <Link to='/'>
                        <h2><span className='logo-first'>Spring</span><span className='logo-last'>Board</span></h2>
                    </Link>
                    <button className ="hamburger-icon">
                        <label htmlFor ="dropdown">
                            <FontAwesomeIcon onClick={openNav} icon={faBars} className = 'nav-icon fa-bars' />
                            <FontAwesomeIcon onClick={closeNav} icon={faXmark} className = 'nav-icon fa-xmark' />
                           {/* <FontAwesomeIcon icon={faAngleUp} className = 'nav-icon fa-angle-up' />
                                <FontAwesomeIcon icon={faAngleDown} className = 'nav-icon fa-angle-down' />*/}
                        </label>
                        <input type="checkbox" id="dropdown" readOnly checked = {checked}/>
                    </button>
                </div>
                <div className='nav-links'>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='/'>Home</NavLink>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='About'>About Us</NavLink>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='Programs'>Programs</NavLink>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='Courses'>Courses</NavLink>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='Staff'>Staffs</NavLink>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link`} to='Contact'>Contact Us</NavLink>
                    <Link onClick={closeNav} className='nav-link' to='Register'>
                        <Button children={'Register'} buttonType='register' type='button'/>
                    </Link>
                    <NavLink onClick={closeNav} className={`{({isActive}) => isActive ? 'active': ''} nav-link admin-link1`} to='Admin'>Admin</NavLink>
                </div> 
                
            </div>
            <div>
                <Outlet />
            </div>
            
            <Footer />
        </div>
    )
}

export default Navigation;