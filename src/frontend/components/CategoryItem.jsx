import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive"
import { mobileSmall } from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  // **fitting images to more natural form**
  object-fit: cover;
  ${mobile({ height: "20vh" })};\
  ${mobileSmall({ height: "15vh" })};
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 2.5rem;
  ${mobileSmall({ fontSize: "1rem" })};
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: grey;
  cursor: pointer;
  font-weight: 600;
      &:hover {
    background-color: teal;
    transition: ease-in-out 0.6s;

    color: #fff;
    border-color: #fff;
  }
`

const CategoryItem = ({item}) => {
  return (
        <Container>
          <Link to={`/products/${item.cat}`}>
          <Image src={item.img}/>
          <Info>
            <Title>
              {item.title}
            </Title>
            <Button>SHOP NOW</Button>
          </Info>
          </Link>
        </Container>
  );
}

export default CategoryItem;
