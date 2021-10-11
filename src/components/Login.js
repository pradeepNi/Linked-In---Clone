import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/abc">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign In</Signin>
        </div>
      </Nav>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 5px;
  /* background-color: black; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const Nav = styled.nav`
  /* background-color: red; */
  max-width: 1228px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 10px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  border-radius: 24px;
  line-height: 12px;
  background-color: rgba(0, 0, 0, 0);
  padding: 10px 24px;

  transition-duration: 200ms;
  cursor: pointer;

  :hover {
    background-color: rgba(112, 181, 249, 0.15);
    /* background-color: black; */
  }
`;
