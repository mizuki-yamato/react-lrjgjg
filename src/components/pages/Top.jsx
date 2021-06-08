import React, {useContext} from "react";
import styled from "styled-components";
import {SecondaryButton} from "../atoms/button/SecondaryButton";
import {useHistory} from "react-router-dom";
import { UserContext } from '../../providers/UserProvider';


export const Top = (props) => {
  const {children} = props;
  const {setUserInfo} = useContext(UserContext);

  const history = useHistory();

  const onclickAdmin = () => {
    setUserInfo({isAdmin: true})
    history.push({pathname: "/users"});
  }
  const onclickGeneral = () => {
    setUserInfo({isAdmin: false})
    history.push({pathname: "/users"});
  }

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