import React from "react";
import {  Link} from 'react-router-dom'

import { Card, CardMedia, CardActions, Typography, CardContent, Button } from '@mui/material';

import './index.css'

interface IProduct {
  id: string;
  price: number;
  thumbnail: string;
  title: string;
}

interface IProps {
  Product:IProduct 
}


const CardsSections = ( {Product }: IProps ) => {
  const { title, price, thumbnail, id } = Product
  return(
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
    <Link to={`card-details/${id}`}>
      <Button size="small">Ver mais</Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardsSections