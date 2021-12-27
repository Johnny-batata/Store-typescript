import React from "react";
import { useHistory} from 'react-router-dom'

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
  const history = useHistory()
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
      <Button size="small" onClick={ () => history.push(`card-details/${id}`) }>Ver mais</Button>
    </CardActions>
  </Card>
  )
}

export default CardsSections