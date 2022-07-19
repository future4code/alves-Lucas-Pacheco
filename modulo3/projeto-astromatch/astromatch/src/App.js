
import './App.css';
import React, {useState} from 'react'
import Home from "./pages/Home"
import Matchpage from "./pages/Matchpage"
import styled from 'styled-components';
import {Container, ContainerPai} from './components/styledApp'
import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SytleGlobal = createGlobalStyle`
body {
  font-family: 'Kalam', cursive;
  margin: 0;
  padding: 0;
}`

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
    <section>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <SytleGlobal /> 
    <ContainerPai>
    <Container>
      {selectScreen()}
     
    </Container>
    </ContainerPai>
    </section>
    
  );
}

export default App;
