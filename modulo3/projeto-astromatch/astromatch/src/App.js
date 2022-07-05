
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Inicialpage from './pages/Inicialpage';
import Matchpage from './pages/Matchpage';
function App() {
 const [currentScreen, setCurrentScreen] = useState("home")
 
 
const goToHome = () => { setCurrentScreen("home")}

const goToMatchScreen = () => { setCurrentScreen("MatchPage")}

const selectScreen = () => {
  switch (currentScreen) {
    case "home":
      return <Inicialpage goToMatchScreen={goToMatchScreen} />
    case "MatchPage":
      return <Matchpage goToHome={goToHome} />
  }

 }
  return (
    <div>
      {selectScreen()}
     
    </div>
  );
}

export default App;
