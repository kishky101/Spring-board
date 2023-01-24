import { Link } from 'react-router-dom';
import Button from '../button/button.component';

import './hero.styles.scss'


const Hero = () => {

    return (
        <header className='hero-section'>
            <div className='hero-text-container'>
                <h1>Springboard Language Academy</h1>
                <p>Bridge the communication gaps among nations through professional language trainings.</p>
                <div className='hero-buttons'>
                    <Link to='Register'><Button>Register Now</Button></Link>
                    <Link to='Contact'><Button buttonType={'defaultTrans'}>Contact Us</Button></Link>
                </div>
            </div>
        </header>
    )
}

export default Hero;