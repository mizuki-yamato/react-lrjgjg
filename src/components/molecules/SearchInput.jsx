import React from "react";
import styled from "styled-components";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {Input} from "../atoms/input/Input";

export const SearchInput = (props) => {
  const {children} = props;
  return (
    <SContainer>
      <Input placeholder="検索条件を入力"/>
      <SButtonWrapper>
        <PrimaryButton children="検索"/>
      </SButtonWrapper>
    </SContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;