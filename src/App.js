import React, { useState, useRef, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import ListTemplate from './components/ListTemplate';
import PlaceInsert from './components/PlaceInsert';
import PlaceList from './components/PlaceList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e7f5ff;
  }
`;

const App = () => {
  const [places, setPlaces] = useState([
    { id: 1, name: '청년다방 구성점' },
    { id: 2, name: '뚱보돈까스 구성점' },
    { id: 3, name: '스타벅스 용인구성점' },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (name) => {
      const place = {
        id: nextId.current,
        name,
      };
      setPlaces(places.concat(place));
      nextId.current += 1;
    },
    [places]
  );
  const onRemove = useCallback(
    (id) => {
      setPlaces(places.filter((place) => place.id !== id));
    },
    [places]
  );

  return (
    <>
      <GlobalStyle />
      <ListTemplate>
        <PlaceInsert onInsert={onInsert} />
        <PlaceList places={places} onRemove={onRemove} />
      </ListTemplate>
    </>
  );
};

export default App;
