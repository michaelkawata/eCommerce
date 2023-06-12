import React from "react";
import styled from "styled-components";

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
`

const Announcement = () => {
  return (
      <Container>
        New Arrivings! Free Shipping on Orders Over $60!
      </Container>
  );
}

export default Announcement;
