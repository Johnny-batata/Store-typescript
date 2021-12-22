import React, { useEffect, useState } from "react";
import { getItemById } from "../../services/api";
import { useParams } from "react-router";
import CarouselCards from "./components/carouselCards"; 

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
  category_id?: string;
  id: string;
  permalink?:string;
  price: number;
  thumbnail: string;
  pictures: IPictures[];
  title: string;
}



  const params: IParams = useParams()
  const [products, setProducts] = useState<IProducts[]>([]);


  const fetchGetItem = async () => {
    const data = await getItemById(params.id)
    console.log(params, 'params', data[0].body)
    setProducts([data[0].body])
    
  }
  useEffect(() => {
    fetchGetItem()
  }, [])

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

  return(
    <div>

      { products && renderProductDetails()}
      {/* <Slider { ...settings }> */}
        {
          products.map((el, index) => <CarouselCards key={index} products={el} />)
        }
      {/* </Slider> */}
    </div>
  )
}

export default CardDetails