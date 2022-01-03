import React, { useEffect, useState } from "react";
import { getItemById, getItemByCategory } from "../../services/api";
import { useParams } from "react-router";
import CarouselCards from "./components/carouselCards"; 
// import Slider from 'react-slick';
import CarouselImgs from "./components/carouselImgs";


const CardDetails = () => {
  interface IParams {
    id: string;
}

interface IPictures {
  url: string;
  id: string;
}

interface IProducts {
  available_quantity?: number;
  category_id?: any;
  id: string;
  permalink?:string;
  price: number;
  thumbnail: string;
  pictures: IPictures[];
  title: string;
  sold_quantity: number;
  accepts_mercadopago: string
}



  const params: IParams = useParams()
  const [products, setProducts] = useState<IProducts[]>([]);
  const [relatedCategorys, setRelatedCategorys] = useState<IProducts[]>([]);
  const [pictures, setPictures] = useState<IPictures[]>([]);


  const fetchGetItem = async () => {
    const data = await getItemById(params.id)
    console.log(params, 'params', data[0].body )
    setProducts([data[0].body])
    setPictures(data[0].body.pictures)
    await fetchCategorys(data[0].body.category_id)
  }
  
  const fetchCategorys = async(categoryId: string) => {
    const data = await getItemByCategory(categoryId)
    console.log(data, 'categorys' )
    setRelatedCategorys(data)
  }
  useEffect(() => {
    fetchGetItem()
  }, [])
  useEffect(() => {
    fetchGetItem()
  }, [params])


  const renderProductDetails = () => {
    return products.map((el, index) =>{
      return(
        <section key={index}>
          <h1>{el.title}</h1>
          {/* <img src={el.thumbnail} alt={el.title} /> */}      
          <section className="carousel-section-pics">
        { <CarouselImgs  pictures={pictures} />}
      </section>
          <p> Preço: R$ {el.price} </p>
          <p> Quantidade disponivel: {el.available_quantity} </p>
          <p> Unidades vendidas: {el.sold_quantity} </p>
          <p> Aceita mercado pago? {el.accepts_mercadopago === 'true' ? 'Sim' : 'Não'} </p>
          { <CarouselCards products={relatedCategorys} />   }
        </section>
      )
    })
  }


  return(
    <div>
      { products && renderProductDetails()}

    </div>
  )
}

export default CardDetails