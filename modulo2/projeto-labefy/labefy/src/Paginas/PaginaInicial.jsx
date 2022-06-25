import React, { Component } from 'react'
import styled from 'styled-components'
import Gif from  "../../src/estilizacao/imagens/AgPd.gif"
import  {GiMagicAxe} from "react-icons/gi"

const Background =  styled.div `
  background-image: url(${Gif});
  background-size:cover;
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%; `

const ButtonBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
button {
  color: purple;
  opacity: 0.6;
  width: 50%;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;

  
}

button:hover {
  background-color: blue;
  color: yellow;
}

button:active  {
 background-color: purple;
 color: orange;
}

h1 {
  color: blueviolet;
}

  `



export default class PaginaInicial extends Component {


  

  render() {
    return (
      <Background>
      <ButtonBox>
        <h1> Seja Bem vindo ao Labefy</h1>
      <button onClick={() => this.props.irParaPlaylist()}> Clique Aqui e seja Levado para Sua aventura </button>
      </ButtonBox>
      </Background>
    )
  }
}
