import React from 'react';
import Slider from "react-slick";
import { News } from './News';
import Image from 'next/image';

export const Slick = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 5000,
        autoplay: true,
    };

    const sliderContent = [
        {
            imageSrc: '/banner-01.webp',
            altText: 'Image 1',
            heading: 'CRAFTING LIFESTYLE FOR EXQUISITE LIVING',
        },
        {
            imageSrc: '/banner-02.webp',
            altText: 'Image 2',
            heading: 'A LUXURY CALLED HOME',
            subHeading: 'SS Cendana, Sector 83, Gurugram',
        },
        {
            imageSrc: '/banner-03.webp',
            altText: 'Image 3',
            heading: 'THE MOJO OF NEIGHBOURHOOD',
            subHeading: 'SS Strada Sector 84, Gurugram',
        },
        {
            imageSrc: '/banner-04.webp',
            altText: 'Image 4',
            heading: 'EXQUISITE LIVING AWAITS YOU',
            subHeading: 'SS Linden Sector 84-85, Gurugram',
        },
    ];

    return (
        <>
            <section>
                <div className='col-12 float-start homeslider'>
                    <Slider {...settings}>
                        {sliderContent.map((slide, index) => (
                            <div key={index}>
                                <div className="swiperslider">
                                    <Image src={slide.imageSrc} width='1920' height='954' alt={slide.altText} />
                                    <div className='home_slidertext position-absolute top-55 text-center text-white'>
                                        <h4>{slide.heading}</h4>
                                        {slide.subHeading && <p>{slide.subHeading}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <News />
            </section>
        </>
    )
}
