import React from "react";
import styled from "styled-components";
import {SecondaryButton} from "../atoms/button/SecondaryButton";
import {useHistory} from "react-router-dom";

export const Top = (props) => {
  const {children} = props;

  const history = useHistory();

  const onclickAdmin = () => history.push({pathname: "/users", state: {isAdmin: true}});
  const onclickGeneral = () => history.push({pathname: "/users", state: {isAdmin: false}});

  return (
    <>
      <SContainer>
        <h2>TOPページです</h2>
        <SecondaryButton onClick={onclickAdmin}>管理者ユーザー</SecondaryButton>
        <div/>
        <div/>
        <SecondaryButton onClick={onclickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
`;