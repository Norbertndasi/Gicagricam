import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import {useLocation} from "react-router-dom";

const Container = styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;
`
function Products({cat, filters, sort}) {
    
// const [products, setProducts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([]);

// useEffect(() =>{
//     const getProducts =async ()=>{
    
//         try {
//             const res = await axios.get(cat ? `http://localhost:5000/api/products?catergory=${cat}` : "http://localhost:5000/api/products");
//             // const res = await axios.get("http://localhost:5000/api/products")
//             console.log(res);
//             setProducts(res.data)
//         } catch (error) {
            
//         }
//     }
//     getProducts();
// },[cat]);

// useEffect(() =>{
//     cat && setFilteredProducts(
//         products.filter(item=>Object.entries(filters).every(([key, value]) =>
//         item[key].includes(value)
//         ))
//     );
// }, [products, cat, filters]);

// useEffect(()=>{
//     if((sort === "newest")){
//         setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.created - b.created)
//         )
//     }
// })
// useEffect(() => {
//     if (sort === "newest") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.createdAt - b.createdAt)
//       );
//     } else if (sort === "asc") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.price - b.price)
//       );
//     } else {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => b.price - a.price)
//       );
//     }
//   }, [sort]);

const location  = useLocation();
  console.log(location)


const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        console.log(res)
        setProducts(res.data);
        //console.log(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  let uni = Math.floor(Math.random() * 10);

    return (
        // <Container>
        //    {cat ? filteredProducts.map((items)=>
        //        <Product item={items} key={items.id} />
        //    ) : products.slice(0, 8).map((items)=>(
        //     <Product item={items} key={items.id} />
        // ))} 
        // </Container>
        
        <Container>
          

      {/* {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : popularProducts
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)} */}

{cat
        ? filteredProducts.map((item) => <Product item={item} key={uni} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}


    </Container>
    );
};

export default Products

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { popularProducts } from "../data";
// import Product from "./Product";
// import axios from "axios";

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const Products = ({ cat, filters, sort }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `http://localhost:5000/api/products?category=${cat}`
//             : "http://localhost:5000/api/products"
//         );
//         setProducts(res.data);
//       } catch (err) {}
//     };
//     getProducts();
//   }, [cat]);

//   useEffect(() => {
//     cat &&
//       setFilteredProducts(
//         products.filter((item) =>
//           Object.entries(filters).every(([key, value]) =>
//             item[key].includes(value)
//           )
//         )
//       );
//   }, [products, cat, filters]);

//   useEffect(() => {
//     if (sort === "newest") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.createdAt - b.createdAt)
//       );
//     } else if (sort === "asc") {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => a.price - b.price)
//       );
//     } else {
//       setFilteredProducts((prev) =>
//         [...prev].sort((a, b) => b.price - a.price)
//       );
//     }
//   }, [sort]);

//   return (
//     <Container>
//       {cat
//         ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
//         : products
//             .slice(0, 8)
//             .map((item) => <Product item={item} key={item.id} />)}
//     </Container>
//   );
// };

// export default Products;


