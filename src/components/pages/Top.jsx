import React from "react";
import styled from "styled-components";

export const Top = (props) => {
  const {children} = props;
  return (
    <>
      <SContainer/>
      <h2>TOPページです</h2>
      <SContainer/>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;