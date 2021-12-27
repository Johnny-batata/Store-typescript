import React, { useState} from "react";
import { useHistory} from 'react-router-dom'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './index.css'
import { Card, CardMedia, CardActions, Typography, CardContent, Button } from '@mui/material';


interface IPictures {
  url: string;
  id: string;
}

interface ProductsInterior {
  // pictures: IPictures[];
  available_quantity?: number;
  category_id?: string | undefined;
  id: string;
  permalink?:string;
  price: number;
  thumbnail: string;
  pictures: IPictures[];
  title: string;
}

interface IProduct {
  products: ProductsInterior
}

const CarouselCards:React.FC<IProduct> = ({ products }) => {
  const { title, thumbnail, price, id } = products
  const history = useHistory()

  // const CarouselCards:React.FC<IProduct> = ({ products }) => {
  // const { pictures } = products
  // const renderPictures = () =>{
  //   return (
  //         pictures.map(( {url, id}: IPictures, index: number) => (
  //         <div className="div-carousel" key={index} >
  //            <img  src={url} alt={id} className="img-carousel" />
  //         </div>
  //      ))
  //     ) 
  //   } 

  const renderCards = () =>{
    return (
          <div className="div-carousel" >
            <Card sx={{ maxWidth: 345 }} className="card" >
            <CardMedia
              component="img"
              height="140"
              image={thumbnail}
              alt={title}
              className="card-img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Preço: R$ {price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={ () => history.push(`card-details/${id}`) }>Ver mais</Button>
            </CardActions>
          </Card>
            </div>
       )
      // ) 
    } 

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   rtl: true
    // };
    return (
      <div>
        {/* <Slider {...settings}> */}
          {/* { renderCards()} */}
        {/* </Slider> */}
      </div>
    );
}


export default CarouselCards

