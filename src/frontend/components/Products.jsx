import React from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";

import { mobileSmall } from "../responsive"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobileSmall({ justifyContent: "center" })}
`

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filters, sort)

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          //fetch from category, if not, fetch from all products
          cat ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        )
        // console.log(res)
        setProducts(res.data)
      } catch (err) { }
    }
    getProducts()
  }, [cat])


  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
    //filters are color, sizes, etc
  }, [products, cat, filters])


  //filtering from newest, to lowest price and highest price
  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts(prev =>
        [...prev].sort((itemOne, itemTwo) => itemOne.createdAt - itemTwo.createdAt)
      )
    } else if ((sort === "lowest")) {
      setFilteredProducts(prev =>
        [...prev].sort((itemOne, itemTwo) => itemOne.price - itemTwo.price)
      )
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((itemOne, itemTwo) => itemTwo.price - itemOne.price)
      )
    }
  }, [sort])

  console.log(products)


  return (
    <Container>
      {/* sorting how much items should be lined up at the main home page */}
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products
        .slice(0, 8)
        .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
}

export default Products;
