import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SliderComponent = ({arrImg}) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
      };
   return (
      <Slider {...settings}>
         {arrImg.map((img) => {
            return (
               <Image src={img} preview={false} width="100%"/>
            )
         })}
      </Slider>
   )
}

export default SliderComponent