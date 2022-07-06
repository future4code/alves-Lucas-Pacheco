
import './App.css';
import React, {useState} from 'react'
import Home from "./pages/Home"
import Matchpage from "./pages/Matchpage"

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
    <div>
      {selectScreen()}
     
    </div>
  );
}

export default App;
