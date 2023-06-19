import { MailOutline } from "@material-ui/icons";
import { Facebook, FmdGood, Instagram, Phone, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive"
import { mobileLarge } from "../responsive"
import { tabletSmall } from "../responsive"

import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  margin: 20px 15px;
  ${mobileLarge({ flexDirection: "column", margin: 0 })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobileLarge({ backgroundColor: "#000", color: "#fff"})}
`

const Logo = styled.h1`

`

const Description = styled.div`
  margin: 20px 0;
  line-height: 1.75rem;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`


const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
  ${tabletSmall({ display: "none"})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment= styled.img`
  width: 50%;
`


const Footer = ({item}) => {
  return (
      <Container>
        <Left>
          <Logo>MCM</Logo>
          <Description>where style meets comfort,
            offers a wide range of trendy and high-quality clothing for men and women,
            perfect for every occasion with MCM
          </Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>
            Useful Links
          </Title>
          <List>
            <ListItem><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></ListItem>
            <ListItem><Link to="/cart" style={{ textDecoration: 'none' }}>Cart</Link></ListItem>
            <ListItem><Link to="/products/men" style={{ textDecoration: 'none' }}>Men Fashion</Link></ListItem>
            <ListItem><Link to="/products/women" style={{ textDecoration: 'none' }}>Women Fashion</Link></ListItem>
            <ListItem><Link to="/products/jeans" style={{ textDecoration: 'none' }}>Jeans</Link></ListItem>
            <ListItem><Link to="/login" style={{ textDecoration: 'none' }}>My Account</Link></ListItem>
            <ListItem><Link to="/" style={{ textDecoration: 'none' }}>Order Tracking</Link></ListItem>
            <ListItem><Link to="/" style={{ textDecoration: 'none' }}>Wishlist</Link></ListItem>
            <ListItem><Link to="/" style={{ textDecoration: 'none' }}>Terms</Link></ListItem>
          </List>
        </Center>
        <Right>
          <Title>
            Contact
          </Title>
          <ContactItem>
            <FmdGood style={{marginRight: "10px"}}/>
            1901 E Second St., Santa Ana 92705
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight: "10px"}} />
            +1 594 302 4293
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight: "10px"}} />
            contactandshop@mcm.dev
          </ContactItem>
          <Payment src={require("../assets/images/card-page.jpg")} />
        </Right>

      </Container>
  );
}

export default Footer;
