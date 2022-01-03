import React, { useEffect, useState } from "react";
import { getItemById, getItemByCategory } from "../../services/api";
import { useParams } from "react-router";
import CarouselCards from "./components/carouselCards"; 
import CarouselImgs from "./components/carouselImgs";
import Header from "../../components/header";
import './index.css'

const ramdomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis tortor, consectetur ut erat vitae, ultricies dignissim ex. Cras faucibus rhoncus nibh a vestibulum. Nullam in ante sit amet augue imperdiet tincidunt sed vel mauris. Donec non felis efficitur, sollicitudin sem vel, volutpat diam. Mauris dignissim orci vitae nulla ornare, nec lacinia nisl mollis. Sed dapibus eros eu lacus accumsan, et porttitor ex lobortis. Aenean orci nisl, pretium eget elit porta, elementum convallis nisl. Curabitur nisi lacus, faucibus id tellus ac, eleifend luctus lorem. Duis eget quam eget lorem fringilla consectetur. Curabitur iaculis imperdiet nulla et fermentum. Sed vitae velit placerat, semper erat sit amet, mollis est. Praesent eget eros quis nibh faucibus lacinia eu quis justo. Nunc bibendum justo quis gravida elementum. Donec velit metus, luctus sed volutpat eu, imperdiet in dui. Nullam purus risus, feugiat in ex eu, elementum commodo libero.'

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
  accepts_mercadopago: Boolean;
  condition: string;
  warranty: string;
  status: string;
  descriptions: string[]
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
      console.log(el.accepts_mercadopago, typeof el.accepts_mercadopago, 'tipos legais')
      return(
        <section key={index}>
          <div className="div-title">
          <h1>{el.title}</h1>
          </div>
          <section className="carousel-section-pics">
        { <CarouselImgs  pictures={pictures} />}
      </section>
          <p> Preço: R$ {el.price},00 </p>
          <p> Quantidade disponivel: {el.available_quantity} </p>
          <p> Unidades vendidas: {el.sold_quantity} </p>
          <p> Aceita mercado pago? {el.accepts_mercadopago === true ? 'Sim' : 'Não'} </p>
          <p> Usado? {el.condition === 'new' ? 'Sim' : 'Não'} </p>
          <p> Garantia: {el.warranty ? el.warranty : 'Não'} </p>
          <p> Status: {el.status  === 'active' ? 'Ativo' : 'Inativo'} </p>
          <p> Descrição: 
            <br />
             {el.descriptions.length > 0 ? el.descriptions : ramdomText } </p>
          <div>
            <h1>Produtos Parecidos: </h1>
          { <CarouselCards products={relatedCategorys} />   }
          </div>
        </section>
      )
    })
  }


  return(
    <div>
      <Header />
      { products && renderProductDetails()}

    </div>
  )
}

export default CardDetails