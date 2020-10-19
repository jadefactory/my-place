import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdRoom } from 'react-icons/md';

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #dee2e6;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const PlaceListItemBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;
const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  color: #1c7ed6;
`;

const PlaceListItem = ({ place, onRemove }) => {
  const { id, name } = place;
  return (
    <PlaceListItemBlock>
      <CheckBox>
        <MdRoom />
        <Text>{name}</Text>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </PlaceListItemBlock>
  );
};

export default PlaceListItem;
