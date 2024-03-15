import React from "react";
import styled from "styled-components";
import { BtnMenuContent, MenuListComponent } from "./StyledFunctionalComponent";

const StyledContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const Container = () => {
  return (
    <StyledContainer>
      <MenuListComponent />
    </StyledContainer>
  );
};

export default Container;
