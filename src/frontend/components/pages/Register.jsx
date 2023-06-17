import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RegisterImage from "../../assets/images/register-page.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${RegisterImage}) top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before sending the request
    if (password !== confirmPassword) {
      // Passwords don't match
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        username,
        email,
        password,
      });

      // Handle success response
      console.log(response.data); // Display the response data in the console
    } catch (error) {
      // Handle error response
      if (error.response && error.response.data) {
        console.log(error.response.data); // Display the error message in the console
      } else {
        console.log(error.message); // Display the generic error message in the console
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By registering an account, you agree to abide by our terms and
            conditions, including our <b>PRIVACY POLICY</b> and{" "}
            <b>USAGE GUIDELINES</b>.
          </Agreement>
          <Button type="submit">CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
