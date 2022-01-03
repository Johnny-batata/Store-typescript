import React, { useState} from "react";
import {  Link } from 'react-router-dom'

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import './index.css'
import { Card, CardMedia, CardActions, Typography, CardContent, Button } from '@mui/material';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

interface IPictures {
  url: string;
  id: string;
}

interface ProductsInterior {
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
  products: ProductsInterior[]
}

const CarouselCards: React.FC<IProduct> = ({ products }) => {


  const renderCards = () =>{
    return (
           products.map((el) => 
          <div className="div-carousel" key={el.id} >
          <Card sx={{ maxWidth: 345 }} 
          className="card"  
          >
          <CardMedia
            component="img"
            height="140"
            image={el.thumbnail}
            alt={el.title}
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Preço: R$ {el.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`${el.id}`}>
            <Button size="small" >Ver mais</Button>
            </Link>
          </CardActions>
        </Card>
          </div>
          )
       )
    } 



    return (
<Carousel
  plugins={[
    'arrows',
    'infinite',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 5
      }
    },
  ]}
 >          
 { renderCards()} 
          {/* <div>
            <h3>1</h3>
           </div>
          <div>
            <h3>2</h3>
           </div>
           <div>
            <h3>3</h3>
           </div>
           <div>
             <h3>4</h3>
           </div>
          <div>
             <h3>5</h3>
           </div>
           <div>
             <h3>6</h3>
           </div> */}
        </Carousel>

    );
}


export default CarouselCards

