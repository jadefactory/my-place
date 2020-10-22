import React, { useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { PlaceDispatchContext, PlaceNextIdContext } from '../PlaceContext';

const PlaceInsertBlock = styled.form`
  display: flex;
  background: #d0ebff;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #1864ab;
    flex: 1;

    &::placeholder {
      color: #4dabf7;
      font-size: 1rem;
    }

    &:focus::placeholder {
      visibility: hidden;
    }
  }

  button {
    outline: none;
    border: none;
    background: #51cf66;
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #37b24d;
    }
  }
`;

const PlaceInsert = () => {
  const dispatch = useContext(PlaceDispatchContext);
  const nextId = useContext(PlaceNextIdContext);

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      if (value === '') {
        window.alert('장소를 입력해주세요');
        e.preventDefault();
      } else {
        e.preventDefault();
        dispatch({
          type: 'CREATE',
          place: {
            id: nextId.current,
            name: value,
          },
        });
        setValue('');
        nextId.current += 1;
      }
    },
    [value, dispatch, nextId]
  );

  return (
    <PlaceInsertBlock onSubmit={onSubmit}>
      <input
        placeholder="방문했던 장소를 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </PlaceInsertBlock>
  );
};

export default React.memo(PlaceInsert);
