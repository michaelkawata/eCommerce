import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import Footer from "../Footer";
import { Add, Remove } from "@mui/icons-material";

import { mobile } from "../../responsive"



const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : 'transparent'};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts= styled.div`

`

const TopText= styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  ${mobile({ display: "none" })}
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-top: 1rem;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`

const ProductSize = styled.span`

`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-right: 10px;
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "20px", fontWeight: "bolder" })}
  `

const MoneySymbol = styled.span`
  font-size: 20px;
  font-weight: 1000;
  margin: 3px;
`

// const MoneySymbolSmall = styled.span`
//   font-size: 12px;

// `


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 600;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "bolder"};
  font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  font-weight: bolder;
  font-size: 17px;
  letter-spacing: 1.5px;
  border: 3px solid #000;
  transition: ease-in 0.4s;
  cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;

    }

`



const Cart = () => {
  return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>
            YOUR CART
          </Title>
          <Top>
            <TopButton>
              CONTINUE SHOPPING
            </TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">
              CHECKOUT NOW
            </TopButton>

<<<<<<< HEAD
          </Top>
          <Bottom>
            <Info>
                <Hr />

              <Product>
                <ProductDetails>
                  <Image src={require("../../assets/images/your-bag-image.jpg")}/>
                  <Details>
                    <ProductName>
                      <b>Product: </b> 2015 Converse Limited Edition
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> 234235
                    </ProductId>
                    <ProductColor color="black"/>
                    <ProductSize>
                      <b>Size: </b> Large
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                        <ProductAmount>
                          2
                        </ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      <MoneySymbol>$</MoneySymbol>
                       35
                    </ProductPrice>
                </PriceDetails>
              </Product>

                <Hr />

              <Product>
                <ProductDetails>
                  <Image src={require("../../assets/images/pop-page-3.jpg")}/>
                  <Details>
                    <ProductName>
                      <b>Product: </b> 2023 Oceanview Blouse
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> 765227
                    </ProductId>
                    <ProductColor color="lightblue"/>
                    <ProductSize>
                      <b>Size: </b> Small
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                        <ProductAmount>
                          1
                        </ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      <MoneySymbol>$</MoneySymbol>
                       26
                    </ProductPrice>
                </PriceDetails>
              </Product>
            </Info>

            <Summary>
              <SummaryTitle>
                ORDER SUMMARY
              </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal: </SummaryItemText>
                <SummaryItemPrice>$96</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping: </SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping Discount: </SummaryItemText>
                <SummaryItemPrice>$-5.90</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>Total: </SummaryItemText>
                <SummaryItemPrice>$96</SummaryItemPrice>
              </SummaryItem>

              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
=======
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src={require("../../assets/images/your-bag-image.jpg")} />
                <Details>
                  <ProductName>
                    <b>Product: </b> 2023 Converse Limited Edition
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 234235
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> Large
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <PriceDetail>
                  Price
                </PriceDetail>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            Summary
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
>>>>>>> 454067f47d6192b4c5f939020c903413a0d1aea3
  );
}

export default Cart;
