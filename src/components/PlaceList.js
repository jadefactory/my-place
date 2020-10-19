import React from 'react';
import styled from 'styled-components';
import PlaceListItem from './PlaceListItem';
import { MdNotificationsNone } from 'react-icons/md';

const PlaceListBlock = styled.div`
  min-height: 40px;
  max-height: 600px;
  overflow-y: auto;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #339af0;
  font-size: 3rem;
  padding: 10px;
  box-sizing: border-box;

  .message {
    margin-top: 10px;
    font-size: 1rem;
  }
`;

const PlaceList = ({ places, onRemove }) => {
  return (
    <PlaceListBlock>
      {places.length !== 0 ? (
        places.map((place) => (
          <PlaceListItem place={place} key={place.id} onRemove={onRemove} />
        ))
      ) : (
        <ErrorMessage>
          <MdNotificationsNone />
          <div class="message">저장된 장소가 없습니다.</div>
        </ErrorMessage>
      )}
    </PlaceListBlock>
  );
};

export default PlaceList;
