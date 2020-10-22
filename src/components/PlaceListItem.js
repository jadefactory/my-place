import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdDelete, MdRoom, MdStar } from 'react-icons/md';
import { PlaceDispatchContext } from '../PlaceContext';

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
`;

const Rating = styled.div`
  width: 200px;
  font-size: 18px;
  color: #1c7ed6;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  background-color: #228be6;
  border-radius: 5px;
  padding: 5px;

  .active {
    color: yellow;
  }

  .point {
    margin-left: auto;
    margin-right: 10px;
    font-size: 0.8rem;
    color: #fff;
  }
`;

const PlaceBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #1c7ed6;
`;

const PlaceListItem = ({ id, name }) => {
  const dispatch = useContext(PlaceDispatchContext);
  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id,
    });

  const onMarking = (e) => {
    let element = e.currentTarget;
    const parent = element.parentNode;
    const children = parent.childNodes;
    const lastChild = parent.lastChild;

    let index = 0;
    for (let i = 0; i < children.length - 1; i++) {
      if (element === children[i]) {
        index = i;
      }
    }

    for (let i = 0; i <= index; i++) {
      children[i].classList.add('active');
    }

    for (let i = index + 1; i <= children.length - 1; i++) {
      children[i].classList.remove('active');
    }

    let score = index + 1;

    if (score === 1) {
      lastChild.innerHTML = `${score}점 : 최악의 식당`;
    } else if (score === 2) {
      lastChild.innerHTML = `${score}점 : 음식이 별로`;
    } else if (score === 3) {
      lastChild.innerHTML = `${score}점 : 먹을만한 곳`;
    } else if (score === 4) {
      lastChild.innerHTML = `${score}점 : 맛있는 식당`;
    } else {
      lastChild.innerHTML = `${score}점 : 최고의 맛집`;
    }
  };

  return (
    <PlaceListItemBlock>
      <PlaceBox>
        <MdRoom />
        <Text>{name}</Text>
        <Rating className="parent">
          <MdStar className="star" onClick={onMarking} />
          <MdStar className="star" onClick={onMarking} />
          <MdStar className="star" onClick={onMarking} />
          <MdStar className="star" onClick={onMarking} />
          <MdStar className="star" onClick={onMarking} />
          <div className="point">별점을 입력하세요</div>
        </Rating>
      </PlaceBox>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </PlaceListItemBlock>
  );
};

export default React.memo(PlaceListItem);
