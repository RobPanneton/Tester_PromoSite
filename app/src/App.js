import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./Header";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      cacapoopoo
    </div>
  );
}

const Section1 = styled.div`
  width: 100%;
  height: 720px;
  background-color: lightgray;
`;

const Section2 = styled(Section1)`
  background-color: black;
`;

const Section3 = styled(Section1)`
  background-color: gray;
`;
const Section4 = styled(Section1)``;
const Section5 = styled(Section1)``;

export default App;
