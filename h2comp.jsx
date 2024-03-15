import { Component } from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: red;
`;
const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export class GenerateH2 extends Component {
  render() {
    const a = ["Naglowek1", "Naglowek2", "Naglowek3"];
    return a.map((content, idx) => (
      <StyledContainer>
        <StyledH2 key={idx}>{content}</StyledH2>
      </StyledContainer>
    ));
  }
}
