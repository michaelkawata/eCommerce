import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { Add, Remove } from "@mui/icons-material";

import { mobile } from "../../responsive"
import { mobileLarge } from "../../responsive"
import { tablet } from "../../responsive"

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobileLarge({ padding: "10px", flexDirection: "column" })}
`

const ImageContainer = styled.div`
  flex: 1;
  ${mobileLarge({ display: "flex", justifyContent: "center"})}
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
   ${mobileLarge({ height: "60vh", width: "80%" })}
   ${tablet({ height: "100%", width: "100%" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 200;
`

const ProductDescription = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  weight: 100;
  font-size: 40px;
`



const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${mobileLarge({ width: "60%" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileLarge({ width: "100%" })}

`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: bolder;
  color: teal;
    &:hover{
      transition: ease-in 0.5s;
      background-color: teal;
      color: #fff;
    }
`



const Product = () => {
  return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImageContainer>
            <Image src={require("../../assets/images/product-page.jpg")} />
          </ImageContainer>
          <InfoContainer>
            <Title>
              Pokadot Dress
              </Title>
            <ProductDescription>
              Step out in style with our elegant Polka Dot Dress,
              featuring a classic design adorned with playful polka dots. This dress is perfect for any occasion,
              whether it's a casual outing or a special event.
              Embrace timeless fashion with our Polka Dot Dress and make a statement wherever you go.
              </ProductDescription>
              <Price>
                $25
              </Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>
                    Color
                  </FilterTitle>
                  <FilterColor color="#000">

                  </FilterColor>
                  <FilterColor color="darkblue">

                  </FilterColor>
                  <FilterColor color="gray">

                  </FilterColor>
                </Filter>
                <Filter>
                  <FilterTitle>
                    Size
                  </FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
  );
}

export default Product;
