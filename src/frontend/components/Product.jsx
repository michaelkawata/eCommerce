import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { mobile } from "../responsive"
import { mobileSmall } from "../responsive"
import { mobileLarge } from "../responsive"
import { tablet } from "../responsive"
import { screenLarge } from "../responsive"

import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
    border-radius: 3px;

  ${mobileSmall({ width: "80%", height: "80%", top: "10%", left: "10%"  })}

`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  // min-width: 20%;
  min-width: 290px;
  height: 300px;
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  ${mobileSmall({ width: "50px", height: "100px"  })} // Responsive style for small mobile devices
  ${mobile({ minWidth: "250px", height: "250px" })} // Responsive style for mobile devices
  ${screenLarge({ minWidth: "20%"})} // Responsive style for large screens


  &:hover ${Info}{
    opacity: 1;
  }
`

const Image = styled.img`
  height: 80%;
  z-index: 2;
  ${mobileSmall({ height: "80%"  })}
  ${mobile({ height: "90%" })}
  ${mobileLarge({ height: "100%"  })}
  ${tablet({ height: "60%"})}
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  ${mobileSmall({ width: "50px", height: "50px" })}

  &:hover{
    background-color: gold;
    transform: scale(1.1);

  }
`

const Product = ({item}) => {
  return (
      <Container>
        {/* <Circle /> */}
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            {/* linking to specific product */}
            <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
  );
}

export default Product;