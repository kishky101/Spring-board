import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import testimonails from '../../testimonials';
import TestimonialCard from '../testimonial card/testimonial-card.component';


import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";
import './testimonials.styles.scss'

SwiperCore.use([Navigation, Pagination, Thumbs, Virtual, FreeMode])

const Testimonials = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(() => null);


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
                loop={true}
                spaceBetween={10}
                navigation={{
                    enabled: true,
                    hideOnClick: true,
                }}
                pagination
                thumbs={{ swiper: thumbsSwiper }}
                freeMode={true}
                className="mySwiper2"
                >
                {testimonails.map((slideContent, idx) => {
                    return (
                        <SwiperSlide className='swiper-content' key={`swiper-content${idx}`}>
                            <TestimonialCard testimonialObj={slideContent} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                pagination
                breakpoints= {
                    {200: {
                        slidesPerView: 2,
                    },
                    320: {
                      slidesPerView: 3,
                    },
                    500: {
                      slidesPerView: 3,
                    },
                    800: {
                      slidesPerView: 4,
                    },
                    980: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                    1400: {
                        slidesPerView: 7,
                    }}
                  }
                className="mySwiper"
                >
                {testimonails.map((slideContent, idx) => {
                    const {imageUrl} = slideContent
                    return (
                        <SwiperSlide className={'swiper-thumb'} key={`swiper-thumb${idx}`}>
                            <img src={imageUrl} />
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>
    )
}

export default Testimonials;