import React, { useState} from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './index.css'

interface IPictures {
  url: string;
  id: string;
}

interface IProduct {
  pictures: IPictures[];
}

const CarouselImgs = ({pictures} : IProduct) => {
  const [value, setValue] = useState(0);

  const onChange = (value: number) => {
  setValue(value);
  }
    const renderPictures = (classname = '') =>{
      console.log(pictures, 'sapo' )
    return (
          pictures.map(( {url, id}: IPictures, index: number) => (
          <div className="div-carousel" key={index} >
             <img  src={url} alt={id} className={classname ? `img-${classname}` : `img` } />
          </div>
       ))
      ) 
    } 

    return(
      <div className="carousel-div-pics">
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          'arrows',
          'infinite'
        ]}
      >
        {renderPictures()}
        </Carousel>
      <Dots
      value={value}
      onChange={onChange}
      thumbnails={  renderPictures('small')  }
    />
    </div>

    )

}

export default CarouselImgs