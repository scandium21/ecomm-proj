import { useEffect } from "react";
import axios from "axios";

function Home({ products }) {
  console.log(products);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // in next v9, can have an api folder in pages folder
  // the js file inside that folder automatically creates api endpoints
  const getProducts = async () => {
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    console.log(response.data);
  };

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  // return response data as an object
  return { products: response.data };
  // note: this object will be merged with existing props
};

export default Home;
