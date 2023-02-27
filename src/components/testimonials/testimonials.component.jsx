import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Virtual, FreeMode, Thumbs, EffectCoverflow } from 'swiper';
import { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useContext, useEffect } from 'react';
import TestimonialCard from '../testimonial card/testimonial-card.component';
import { TestimonialContext } from '../../context/testimonial/testimonial.context';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './testimonials.styles.scss'

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Keyboard, EffectCoverflow])

const Testimonials = () => {
    const {testimonial} = useContext(TestimonialContext)
    useEffect (() => {
        if (window.innerWidth > 786) {
            import('swiper/scss/navigation')
        }
    })

    return (
        <div
        className='testimonial-container'>
            <div>
                <h2 className='testimonial-header'>testimonials</h2>
                <p className='testimonial-description'>Read what our students have to say about us</p>
            </div>
            <Swiper
            style={{
                "--swiper-navigation-color": "var(--light-brown-clr)",
                "--swiper-pagination-color": "var(--light-brown-clr)",
            }}
            loop
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 10000,
            disableOnInteraction: true,
            }}
         
            effect={'coverflow'}
            pagination={{
            enabled: true,
            clickable: true,
            position: 'start'
            }}
            
            navigation={{
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
                hiddenClass: '.swiper-button-disabled'
            }}
            modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard, EffectCoverflow]}
            className="mySwiper2"
            >

            <div className='swipe swiper-button-next'></div>
            <div className='swipe swiper-button-prev'></div>
                {testimonial.map((slideContent, idx) => {
                    return (
                        <SwiperSlide className='swiper-content' key={`swiper-content${idx}`}>
                            <TestimonialCard testimonialObj={slideContent} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
        </div>
    )
}

export default Testimonials;