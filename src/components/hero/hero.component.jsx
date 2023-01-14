import Button from '../button/button.component';

import './hero.styles.scss'


const Hero = () => {

    return (
        <header className='hero-section'>
            <div className='hero-text-container'>
                <h1>Springboard Language Academy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus ex, ipsum modi a corrupti eos quo </p>
                <div className='hero-buttons'>
                    <Button>Register Now</Button>
                    <Button buttonType={'defaultTrans'}>Contact Us</Button>
                </div>
            </div>
        </header>
    )
}

export default Hero;