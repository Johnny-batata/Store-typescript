// import React from "react";
import React, { useEffect, useState} from 'react'
import Header from "../../components/header";
import { getAllCategories, getItemByCategory } from '../../services/api'
import CardsSections from './components/CardsSections';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Home: React.FC = () => {

  interface ICategorys {
    id: string;
    name: string;
  }

  interface IProducts {
    available_quantity?: number;
    category_id?: string;
    id: string;
    permalink?:string;
    price: number;
    thumbnail: string;
    title: string;
    pictures: Object

  }

  const [categories, setCategories] = useState<ICategorys[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchAllCategories = async () => {
    const data = await getAllCategories()
    console.log(data, 'data')
    setCategories(data)
  }

  const handleCategoryClick = async (id:string) => {
    const data = await getItemByCategory(id)
    setProducts(data)
  }

  useEffect(() => {
    fetchAllCategories()
  }, [])

  const renderCategories = () => {
    return (
      <div>
        {
          categories && categories.map(({name, id}, index) => {
            return (
              <div key={index}>
                <button type="button" onClick={(e) => handleCategoryClick(id)}>{name}</button>
              </div>
            )
          })
        }
      </div>
    )
  }

  const renderCardSection = () => {
    if(products.length === 0) return  <p>Digite algum termo de pesquisa ou escolha uma categoria</p>
    return products.map((el, index) => <CardsSections key={index} Product={el} />)
  }

  return(
    <div>
      <Header />
      {/* <section>
        <label id="search-input"/>
        <input type="text" id="search-input" placeholder="...digite aqui" />
        <button type="button">Pesquisar </button>
      </section> */}
      <section className="cardGroup">
        { renderCardSection() }
        </section>
        { renderCategories() }
    </div>
  )
}

export default Home;