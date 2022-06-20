import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import { sliderItems } from '../data';
import { mobile } from '../responsive';


const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({
    display:"none"
})};
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:teal;
border-radius:50%;
display:flex;
align-items:center;
justify-items:center;
position:absolute;
top:0;
bottom:0;
left: ${props =>props.direction === 'left' && '10px'};
right: ${props =>props.direction ==='right' && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;

`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%
`

const InfoContainer = styled.div`
padding:50px;
`
const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing: 3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`




function Slider() {

const [slideIndex, setSlideIndex] = useState(0);
const handleClick = function(direction){

if(direction ==="left"){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
}else{
    setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
}

}
    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")} >
<ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex = {slideIndex} >
                { sliderItems.map((items)=>(

                

                <Slide bg={items.bg} key={items.id} >
                <ImgContainer>
                <Image src={items.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Desc>{items.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                )) }
                {/* <Slide bg='fcf1ed' >
                <ImgContainer>
                <Image src='https://images.pexels.com/photos/2134180/pexels-photo-2134180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </ImgContainer>
                <InfoContainer>
                    <Title>POULTRY PRODUCT</Title>
                    <Desc>BUY AND SELL AGRICULTURAL PRODUCTS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg='fbf0f4'>
                <ImgContainer>
                <Image src='https://images.pexels.com/photos/4919685/pexels-photo-4919685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </ImgContainer>
                <InfoContainer>
                    <Title>CATTLE</Title>
                    <Desc>BUY AND SELL AGRICULTURAL PRODUCTS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide> */}
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')} >
<ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
