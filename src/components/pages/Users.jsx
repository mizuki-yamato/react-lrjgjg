import React from "react";
import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";
import {useLocation} from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: 'https://source.unsplash.com/2l0CWTpcChI',
    name: `テスト太郎-${val}`,
    email: '12345@example.com',
    phone: '03-1234-5678',
    company: {
      name: 'ああああ株式会社'
    }
  };
});

export const Users = (props) => {
  const {state} = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  
  return (
    <>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput/>
        <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
        </SUserArea>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;