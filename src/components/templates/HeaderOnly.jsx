import React from "react";
import styled from "styled-components";
import {Header} from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const {children} = props;
  return (
    <>
      <Header/>
      <SContainer>{children}</SContainer>
    </>
  );
};

const SImage = styled.img`
  border-radius: 50%;
`;

const SContainer = styled.div`
  text-align: center;
`;

const SName = styled.p`
  font-size: 18px;
  margin: 0;
  color: #40514e;
`;