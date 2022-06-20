import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
background-color:black;
color:white;
${mobile({
    flexDirection:"column"
})};

`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`

const Center = styled.div`
flex:1;
padding:20px;
${mobile({
    display:"none"
})};
`
const Right = styled.div`
flex:1;
padding:20px;
`
const Description = styled.p`
margin:20px 0px;
`
const Title = styled.h3`
margin-bottom:30px;

`
const List = styled.ul`
padding:0;
margin:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Logo = styled.h1`

`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment = styled.img`
width:50%;
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>GICAGRICAM</Logo>
                <Description>
                As individuals within a society become more specialized in their economic activities, they come to rely upon others to supply at least some of the products and services which they need. Thus begins a process of exchange between buyers and sellers. For a while buyers and sellers remain in immediate contact and each party is able to determine what the other needs and values and, therefore, will be willing to exchange.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color='0077b5'>
                        <LinkedInIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Crops Farming</ListItem>
                    <ListItem>Animal Farming</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                   <RoomIcon style={{marginRight:"10px"}} /> street, city, country
                </ContactItem>
                <ContactItem>
                  <PhoneIcon style={{marginRight:"10px"}} />  phone number
                </ContactItem>
                <ContactItem>
                   <MailIcon style={{marginRight:"10px"}} /> contact email
                </ContactItem>
                <Payment src='https://stepstone.org.nz/wp-content/uploads/2017/01/pay-options.png' />
            </Right>
        </Container>
    )
}

export default Footer
