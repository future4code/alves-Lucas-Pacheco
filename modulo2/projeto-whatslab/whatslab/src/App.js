import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'

const TerminalTotal = styled.div `
   display: flex;
    justify-content: center;`

const WhatLabTerminal = styled.section `
 max-width: 60%;
 height: 90%;
 border: 1px solid black;
 display: flex;
 flex-direction: column;`

  

class App extends React.Component {
  
  render() {
  return (
    <TerminalTotal>

      <WhatLabTerminal>

      </WhatLabTerminal>
      
    </TerminalTotal>
  );
}

}
export default App;
