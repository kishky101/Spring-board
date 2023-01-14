import Button from '../button/button.component'
import './about-us.styles.scss'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='about-us-img-container'>
                <img src='./src/assets/about_us_img.png' alt='about-us-img' className='about-us-img' />
            </div>
            <div className='about-us-texts'>
                <div className='about-us-text-wrapper'>
                    <h2 className='about-us-header'>About us</h2>
                    <h3 className='about-us-header2'>We have all compiled materials and trained tutors</h3>
                    <p className='about-us-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus ex, ipsum modi a corrupti eos quo necessitatibus maxime quas recusandae vero eum dicta praesentium nemo cum vel explicabo ab!</p>
                    <div>
                        <Button >Register Now</Button>    
                    </div>

                </div>   
            </div>
           
        </div>
    )
}

export default AboutUs