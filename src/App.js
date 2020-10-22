import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ListTemplate from './components/ListTemplate';
import PlaceInsert from './components/PlaceInsert';
import PlaceList from './components/PlaceList';
import { PlaceProvider } from './PlaceContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e7f5ff;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PlaceProvider>
        <ListTemplate>
          <PlaceInsert />
          <PlaceList />
        </ListTemplate>
      </PlaceProvider>
    </>
  );
};

export default App;
