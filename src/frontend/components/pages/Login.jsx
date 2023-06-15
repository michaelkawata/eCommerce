import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import LoginImage from "../../assets/images/login-page.jpg";

import { mobileSmall } from "../../responsive"
import { mobileLarge } from "../../responsive"
import { tablet } from "../../responsive"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${LoginImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
<<<<<<< HEAD
  ${mobileLarge({ width: "75%" })}
  ${tablet({ width: "55%" })}
`
=======
`;
>>>>>>> 454067f47d6192b4c5f939020c903413a0d1aea3

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
<<<<<<< HEAD
  ${mobileSmall({ width: "70%" })}

`
=======
`;
>>>>>>> 454067f47d6192b4c5f939020c903413a0d1aea3

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin: 10px 0;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();a
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });

      res.data && window.location.replace("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
<<<<<<< HEAD
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <Link>Forgot Password?</Link>
             <Link>Create New Account</Link>
          </Form>
        </Wrapper>
      </Container>
=======
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <Error>{error}</Error>}
        <Form onSubmit={handleSubmit}>
          <Input 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            placeholder="Password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
>>>>>>> 454067f47d6192b4c5f939020c903413a0d1aea3
  );
};

export default Login;
