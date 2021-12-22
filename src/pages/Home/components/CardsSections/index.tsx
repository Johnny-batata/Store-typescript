import React from "react";
import { useHistory} from 'react-router-dom'

// import { Card, CardTitle, CardImg, CardBody, Button, CardGroup, CardSubtitle, CardText } from 'reactstrap'
import { Card, CardMedia, CardActions, Typography, CardContent, Button } from '@mui/material';


// import 'bootstrap/dist/css/bootstrap.min.css';


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
    // <Card>
    //   <CardImg
    //     alt={title}
    //     src={thumbnail}
    //     top
    //     width="20%"
    //   />
    //   <CardBody>
    //     <CardTitle tag="h5" >{title}</CardTitle>
    //     <CardSubtitle>{price}</CardSubtitle>
    //     <Button  onClick={ () => history.push(`card-details/${id}`) }> Ver mais</Button>
    //   </CardBody>
    //  </Card>

  )
}

export default CardsSections