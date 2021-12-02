// import React from "react";
import React, { useEffect, useState} from 'react'
import Header from "../../components/header";
import { getAllCategories, getItemByCategory } from '../../services/api'

const Home: React.FC = () => {

  interface ICategorys {
    id: string;
    name: string;
  }

  interface IProducts {
    available_quantity: number;
    category_id: string;
    id: string;
    permalink:string;
    price: number;
    thumbnail: string;
    title: string;
  }


  const [categories, setCategories] = useState<ICategorys[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchAllCategories = async () => {
    const data = await getAllCategories()
    setCategories(data)
  }

  const handleCategoryClick = async (id:string) => {
    const data = await getItemByCategory(id)
    console.log('bata', data, id, products)
    setProducts(data)
  }

  useEffect(() => {
    fetchAllCategories()
  })

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

  return(
    <div>
      <Header />
      <section>
        <label id="search-input"/>
        <input type="text" id="search-input" placeholder="...digite aqui" />
        <button type="button">Pesquisar </button>
      </section>
      <section>
        {
          categories && renderCategories()
        }
      </section>
    </div>
  )
}

export default Home;