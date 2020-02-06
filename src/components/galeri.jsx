import React, { Component } from "react";
import { Image } from 'semantic-ui-react';

import Slider from "react-slick";
import Template1 from '../image/template1.jpeg'
import Template2 from '../image/template2.jpeg'
import Template3 from '../image/template3.jpeg'
import Template4 from '../image/template4.jpeg'


class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className='Container-carousel'>
                <Slider {...settings}>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src={Template1}></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius ' src={Template2}></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src={Template3}></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src={Template4}></Image>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default Carousel