import React from "react";
import styled from "styled-components";
import RegisterImage from "../../assets/images/register-page.jpg"

import { mobileSmall } from "../responsive"
import { mobileLarge } from "../responsive"
import { tablet } from "../responsive"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${RegisterImage}) top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobileLarge({ width: "75%" })}
  ${tablet({ width: "55%" })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobileSmall({ width: "100%" })}

`



const Register = () => {
  return (
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
              By registering an account, you agree to abide by our terms and conditions, including our <b>PRIVACY POLICY</b> and <b>USAGE GUIDELINES</b>.
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
          </Form>
        </Wrapper>
      </Container>
  );
}

export default Register;
