
import './App.css';
import React, {useState} from 'react'
import Home from "./pages/Home"
import Matchpage from "./pages/Matchpage"
import styled from 'styled-components';
import {Container, ContainerPai} from './components/styledApp'

function App() {
 const [currentScreen, setCurrentScreen] = useState("home")
 
 
const goToHome = () => { setCurrentScreen("home")}

const goToMatchScreen = () => { setCurrentScreen("MatchPage")}

const selectScreen = () => {
  switch (currentScreen) {
    case "home":
      return <Home goToMatchScreen={goToMatchScreen} />
    case "MatchPage":
      return <Matchpage goToHome={goToHome} />
    default:
      return "Vacilou"
  }

 }
  return (
    <ContainerPai>
    <Container>
      {selectScreen()}
     
    </Container>
    </ContainerPai>
  );
}

export default App;
