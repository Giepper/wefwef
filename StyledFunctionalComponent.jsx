import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 75px;
  height: 50px;
  border: 2px solid red;
  background-color: beige;
  border-radius: 4px;
  color: #000;
`;

const StyledBtnMenuContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
`;

const StyledBtnP = styled.p`
  color: red;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnMenuContent = (props) => {
  return (
    <>
      <StyledBtnMenuContainer>
        <StyledButton>{props.txt}</StyledButton>
        {/* {props.txt.map((content, idx) => (
          <StyledButton key={idx}>{content}</StyledButton>
        ))} */}
      </StyledBtnMenuContainer>
    </>
  );
};

export const MenuListComponent = () => {
  const txt = ["A", "B", "C"];

  return txt.map((content, idx) => <BtnMenuContent key={idx} txt={content} />);
};
