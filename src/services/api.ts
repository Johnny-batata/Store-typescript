import axios from "axios"


const getAllCategories = async() => {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories'

  const response = await axios({
    method: 'get',
    url,
  })
  .then((data) => data.data)
  .catch((err) => err);

  console.log(response, 'response ')
  return response
}

const getItemByName = async(query: string) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`

  const response = await axios({
    method: 'get',
    url,
  })
  .then((data) => data.data.results)
  .catch((err) => err);
  return response
}

const getItemById = async(id: string) => {
  const url = `https://api.mercadolibre.com//items?ids=${id}`

  const response = await axios({
    method: 'get',
    url,
  })
  .then((data) => data.data)
  .catch((err) => err);
  return response
}

const getItemByCategory = async(id: string) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`

  const response = await axios({
    method: 'get',
    url,
  })
  .then((data) => data.data.results)
  .catch((err) => err);
  return response
}


export { getAllCategories, getItemByName, getItemByCategory, getItemById }