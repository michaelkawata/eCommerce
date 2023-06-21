import React from "react";
import styled from "styled-components";
// import RegisterImage from "../images/register-page.jpg"

import { mobileSmall } from "../responsive"
import { mobileLarge } from "../responsive"
import { tablet } from "../responsive"



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://ecommercemcm.s3.us-west-1.amazonaws.com/4/marbaker.swe_black_young_women_wearing_japanese_desiner_shirt_h_c7eb5b5e-74a2-45d6-a284-6191b39babcb.png);
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
  background-color: #000;
  color: white;
  cursor: pointer;
  ${mobileSmall({ width: "100%" })}

`

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
      const response = await axios.post("/register", {
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