import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Router} from "react-router-dom";
import AboutPage from './components/AboutPage'
import HandDraws from './components/HandDraws'
import GraphDesigne from './components/GraphDesigne'
import Interier from './components/Interier'
import Contacts from './components/Contacts'
import Landscape from './components/Landscape'
import Skills from './components/Skills'


export const StyledApp = styled.div`
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
          <Route path="/contact">
            <Contacts />
          </Route>

      </StyledApp>
    </BrowserRouter>
  );
}

export default App