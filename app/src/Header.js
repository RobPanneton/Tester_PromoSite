import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>LOGO</Logo>
        </LogoWrapper>
        <NavWrapper>
          <Button>Nav</Button>
          <Button>Nav</Button>
          <Button>Nav</Button>
          <Button>Nav</Button>
          <Button>Nav</Button>
        </NavWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 71px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 100%;
  width: 120px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 34px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-right: 52px;
  border: none;
  width: 90px;
  height: 27px;
`;

export default Header;
