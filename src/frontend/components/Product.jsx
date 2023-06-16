import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



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

`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  // min-width: 20%;
  min-width: 290px;
  height: 300px;
  display: flex;

  align-items: center;
  // justify-content: space-between;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius: 3px;

  &:hover ${Info}{
    opacity: 1;
  }
`

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: #fff;
//   position: absolute;
// `



const Image = styled.img`
  height: 80%;
  z-index: 2;

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


  &:hover{
    background-color: #e9f5f5;
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
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
  );
}

export default Product;
