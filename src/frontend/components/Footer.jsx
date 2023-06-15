import { MailOutline } from "@material-ui/icons";
import { Facebook, FmdGood, Instagram, Phone, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive"
import { mobileLarge } from "../responsive"
import { tabletSmall } from "../responsive"


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
  ${mobileLarge({ backgroundColor: "teal", color: "#fff"})}
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
            perfect for every occasion with Marlons
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
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
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
