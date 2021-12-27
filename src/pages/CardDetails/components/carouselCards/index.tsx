import React, { useState} from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './index.css'

interface IPictures {
  url: string;
  id: string;
}

interface IUrl {
  pictures: IPictures[];
}

interface IProduct {
  products: IUrl
}

const CarouselCards:React.FC<IProduct> = ({ products }) => {
  const { pictures } = products
  const renderPictures = () =>{
    return (
          pictures.map(( {url, id}: IPictures, index: number) => (
          <div className="div-carousel" key={index} >
             <img  src={url} alt={id} className="img-carousel" />
          </div>
       ))
      ) 
    } 

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          { renderPictures()}
        </Slider>
      </div>
    );
}


export default CarouselCards

