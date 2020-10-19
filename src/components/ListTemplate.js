import React from 'react';
import styled from 'styled-components';

const ListTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: #339af0;
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: #fff;
`;

const ListTemplate = ({ children }) => {
  return (
    <ListTemplateBlock>
      <AppTitle>내가 다녀온 맛집들</AppTitle>
      <Content>{children}</Content>
    </ListTemplateBlock>
  );
};

export default ListTemplate;
