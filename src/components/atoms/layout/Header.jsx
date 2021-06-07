import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = (props) => {
  const {children} = props;
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;