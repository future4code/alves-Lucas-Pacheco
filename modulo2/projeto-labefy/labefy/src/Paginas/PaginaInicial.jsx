import React, { Component } from 'react'
import { Background, ButtonBox } from './estilizacao/sytledP1'

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
