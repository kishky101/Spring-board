import './testimonial-card.styles.scss'

// const testimonialObj = {
//     name: 'salhu adam',
//     proffesion: 'doctor',
//     imageUrl: 'https://lifetouch.com/wp-content/uploads/2018/06/Underclass_girlwithbluebg.jpg',
//     testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus ex, ipsum modi a corrupti eos quo necessitatibus maxime quas recusandae vero eum dicta praesentium nemo cum vel explicabo ab!'
// }

const TestimonialCard = ({testimonialObj}) => {

    const {name, imageUrl,proffesion, testimony} = testimonialObj;
    return (
        <div className='testimonial-card-container'>
            <div className='testimonial-card-img'>
                <img src={imageUrl} alt='testimonial Image' />
            </div>
            <div className='testimonial-card'>
                <div>
                    <h3>{name}</h3>
                    <span>{proffesion}</span>
                </div>
                <p>{testimony}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;