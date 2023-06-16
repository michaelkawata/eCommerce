import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive"
import { mobileSmall } from "../responsive"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
   ${mobile({ fontSize: "12px" })}
   ${mobileSmall({ fontSize: "10px", textAlign: "center" })}
`

const Announcement = () => {
  return (
      <Container>
        New Arrivings! Free Shipping on Orders Over $60!
      </Container>
  );
}

export default Announcement;
