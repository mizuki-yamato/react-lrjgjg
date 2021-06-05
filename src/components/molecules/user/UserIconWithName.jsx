import React from "react";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const {name, image} = props;
  return (
    <SContainer>
      <SImage height={160} width={160} alt={name} src={image}/>
      <p>{name}</p>
    </SContainer>
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