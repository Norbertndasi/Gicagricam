import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
const Container = styled.div`

`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Title = styled.h1`
margin:20px;
`
const Filter = styled.div`
margin:20px;
${mobile({
    width:"0px 10px", display: "flex", flexDirection: "column"
})};
`
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({
    marginRight:"0px"
})};
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({
    margin:"10px 0px"
})};
`
const Option = styled.option`
`

function ProductList() {
    const location = useLocation();
    
    const cat = location.pathname.split("/")[2];
    console.log(cat);
    const [filters, setFilter] = useState({});
    const [sorts, setSorts] = useState("newest");
    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        });
      
        

    }
    console.log(filters);


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="types" onChange={handleFilters} >
                        <Option disabled  >Type</Option>
                        <Option>Livestock</Option>
                        <Option>crops</Option>
                        <Option>Fish Farming</Option>
                        <Option>Miscellaneous</Option>
                    </Select>
                    <Select onChange={handleFilters} name="size">
                        <Option disabled  >Quantity</Option>
                        <Option>Large</Option>
                        <Option>Small</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e)=>setSorts(e.target.value)}>
                        <Option value="newest"  >Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc" >Price(desc)</Option>
                    </Select>
                    </Filter>
            </FilterContainer>
            <Products cat = {cat} filters = {filters} sorts={sorts} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
