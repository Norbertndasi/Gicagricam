import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile({
    padding:"10px"
})};
`
const Title = styled.h1`
font-weight:300;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black": "transparent"};
color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({
    display:"none"
})};
`
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
})};
`

const Info = styled.div`
flex:3;
`
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({
    flexDirection:"column"
})};
`
const ProductDetails = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
height:100%;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
`
const ProductQuantity = styled.span`

`
const PriceDetails = styled.span`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({
    marginBottom:"20px"
})};
`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({
    margin:"5px 15px"
})};
`
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total" && "500"};
font-size:${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`
function Cart() {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled" >CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src='https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_960_720.jpg'/>
                                <Details>
                                <ProductName><b>Product:</b>FRESH PEPPER</ProductName>
                                <ProductId><b>ID:</b>343434</ProductId>
                                <ProductColor color="red" />
                                <ProductQuantity>
                                    <b>Quantity:</b>12 buckets
                                </ProductQuantity>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>30,000 Fcfa</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src='https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg'/>
                                <Details>
                                <ProductName><b>Product:</b>FRESH TOMATOES</ProductName>
                                <ProductId><b>ID:</b>33435</ProductId>
                                <ProductColor color="red" />
                                <ProductQuantity>
                                    <b>Quantity:</b>12 buckets
                                </ProductQuantity>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>17,000 Fcfa</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>47,000Fcfa</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>12,000Fcfa</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-4,000Fcfa</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total" >
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>55,000Fcfa</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            
            <Footer />
        </Container>
    )
}

export default Cart
