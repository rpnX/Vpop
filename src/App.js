import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import AboutPage from './components/AboutPage'
import HandDraws from './components/HandDraws'
import GraphDesigne from './components/GraphDesigne'
import Interier from './components/Interier'
import Carusel from './components/Carusel'
import Landscape from './components/Landscape'
import Skills from './components/Skills'



export const StyledApp = styled.div`
  position: absolute;
  display: inline-flex;
  left: 0;
  right: 0;
  @media screen and (max-width: 1040px) {
    display: table-row;
    }

`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Navbar/>
        <Route path="/handdraw">
          <HandDraws />
        </Route>
        <Route path="/grafdesign">
          <GraphDesigne />
        </Route>
        <Route path="/interier">
          <Interier />
        </Route>
        <Route path="/landscape">
          <Landscape />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <Carusel />
        </Route>

      </StyledApp>
    </BrowserRouter>
  );
}

export default App