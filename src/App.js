import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";

export const StyledApp = styled.div`
`;


function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Navbar/>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
