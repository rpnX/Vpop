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
import InterierProj from './components/InterierProj';
import HanddrawsProj from './components/HanddrawsProj';



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
        <Route exact path="/" component={Carusel} />
        <Route exact path="/handdraw" component={HandDraws} />
        <Route exact path="/grafdesign" component={GraphDesigne} />
        <Route exact path="/interier" component={Interier} />
        <Route exact path="/landscape" component={Landscape} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/interier/:id" component={InterierProj} />
        <Route exact path="/handdraws/:id" component={HanddrawsProj} />


      </StyledApp>
    </BrowserRouter>
  );
}

export default App