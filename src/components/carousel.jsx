import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'

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
                <div className='Title-size'> Tokovidio Original Series </div>
                <Slider {...settings}>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1804/2018_Mamma_Mia_Here_We_Go_Again_4K_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius ' src='https://www.10wallpaper.com/wallpaper/medium/1712/Justice_League_Wonder_Woman_Aquaman_4K_HD_Poster_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1804/Monte_Carlo_Movies_HD_Poster_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1210/The_Twilight_Saga_Breaking_Dawn_Movie_HD_Desktop_Wallpapers_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1209/The_Walking_Dead-American_TV_series_Wallpaper_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1205/Glee_American_TV_series_HD_Wallpaper_medium.jpg'></Image>
                    </div>
                    <div className='Carousel-image slick-slide'>
                        <Image className='image-radius' src='https://www.10wallpaper.com/wallpaper/medium/1710/Baby_Driver_2017_High_Quality_Wallpaper_medium.jpg'></Image>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default Carousel