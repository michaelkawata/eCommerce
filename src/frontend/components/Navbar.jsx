import { Search } from '@mui/icons-material';
import { Badge, Menu, MenuItem } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import styled from 'styled-components'

// Styled components definitions
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItemStyled = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MCM</Logo>
        </Center>
        <Right>
          <MenuItemStyled>REGISTER</MenuItemStyled>
          <MenuItemStyled>SIGN IN</MenuItemStyled>
          <MenuItemStyled onClick={handleCartClick}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItemStyled>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCartClose}
          >
            <MenuItem onClick={handleCartClose}>Item 1</MenuItem>
            <MenuItem onClick={handleCartClose}>Item 2</MenuItem>
            <MenuItem onClick={handleCartClose}>Item 3</MenuItem>
            <MenuItem onClick={handleCartClose}>Item 4</MenuItem>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
