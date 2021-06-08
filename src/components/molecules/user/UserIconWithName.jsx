import React, {useContext} from "react";
import styled from "styled-components";
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = (props) => {
  const {name, image, isAdmin } = props;
  const context = useContext(UserContext);
  console.log(context);
  return (
    <SContainer>
      <SImage height={160} width={160} alt={name} src={image}/>
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
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

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa,;
  cursor: pointer;
`;