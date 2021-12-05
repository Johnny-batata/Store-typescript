import React from "react";

interface IProduct {
  id: string;
  price: number;
  thumbnail: string;
  title: string;
}

interface IProps {
  Product:IProduct 
}


const CardDetails = ( {Product }: IProps ) => {
  const { id, title, price, thumbnail } = Product
  console.log(Product, 'carddetaisl')
  return(
    <section>
      <p>{title}</p>
      <p>{price}</p>
      <img src={thumbnail} alt={title} />
      <button type="button" onClick={ () => console.log('id', id) } >Ver mais</button>
    </section>
  )
}

export default CardDetails