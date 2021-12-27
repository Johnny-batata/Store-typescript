import React, { useEffect, useState } from "react";
import { getItemById, getItemByCategory } from "../../services/api";
import { useParams } from "react-router";
import CarouselCards from "./components/carouselCards"; 
import Slider from 'react-slick';


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
  category_id?: string | undefined;
  id: string;
  permalink?:string;
  price: number;
  thumbnail: string;
  pictures: IPictures[];
  title: string;
}



  const params: IParams = useParams()
  const [products, setProducts] = useState<IProducts[]>([]);
  const [relatedCategorys, setRelatedCategorys] = useState<IProducts[]>([]);


  const fetchGetItem = async () => {
    const data = await getItemById(params.id)
    console.log(params, 'params', data[0].body)
    setProducts([data[0].body])
  }

  const fetchCategorys = async() => {
    const data = await getItemByCategory(products[0].category_id)
    console.log(data, 'categorys', products[0].category_id)
    setRelatedCategorys(data)
  }
  useEffect(() => {
    fetchGetItem()
    
  }, [])
  useEffect(()=> {
    console.log('estou sendo chamado que nem um idiota  ;-;')  
    fetchCategorys()

  }, [products])

  const renderProductDetails = () => {
    return products.map((el) =>{
      return(
        <section>
          <h1>{el.title}</h1>
          <img src={el.thumbnail} alt={el.title} />
          <p>{el.price} </p>
          <p>{el.available_quantity} </p>
        </section>
      )
    })
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


  return(
    <div>

      { products && renderProductDetails()}
      {/* <Slider { ...settings }>
        {
          relatedCategorys.map((el, index) => <CarouselCards key={index} products={el} />)
        }
      </Slider> */}
    </div>
  )
}

export default CardDetails