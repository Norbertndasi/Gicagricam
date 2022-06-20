import React from 'react'
import styled from 'styled-components'
import Search from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
height:60px;
${mobile({
    height:"50px"
})};
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({
    display:"none"
})};
`
const Wrapper = styled.div`
height:100%;
display:flex;
justify-content: space-between;
align-items:center;
${mobile({
    padding:"10px 0px"
})};
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
align-items:center;
display:flex;
justify-content:flex-end;
${mobile({
    justifyContent:"center", flex: 2, fontSize:"2px"
})};

`
const SearchContainer = styled.div`
border:0.5px solid lightgrey;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;

`
const Input = styled.input`
border:none;
${mobile({
    width:"50px"
})};
`

const Logo = styled.h1`
font-weight:bold;
${mobile({
    fontSize:"24px"
})};
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({
    fontSize:"9px", marginLeft:"10px" 
})};
`

function Navbar() {
    return (
        
        <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <Input placeholder='Search' />
                <SearchContainer>
                
                <Search style={{color:"gray", fontSize:"16px"}} />
                </SearchContainer>
                
            </Left>
            <Center>
                <Logo>GICAGRICAM</Logo>
            </Center>

            <Right>
                <Link to={"/register"} style={{textDecoration: "none"}}>
                <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to={"/login"}  style={{textDecoration: "none"}} >
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
      </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
