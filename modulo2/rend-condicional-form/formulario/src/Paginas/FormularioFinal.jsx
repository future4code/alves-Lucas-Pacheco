import React, { Component } from 'react'
import styled from 'styled-components'

const EstiloCaixa = styled.div `
 display: flex;
 flex-direction: column;
 align-items: Center;
 text-align: center;`


export default class formularioFinal extends Component {
  render() {
    return (
      <EstiloCaixa>
        <h1>ACABOU FINALMENTE!</h1>
        <h3> OBRIGADO POR PARTICIPAR DO MEU FORMULÁRIO! </h3>
      </EstiloCaixa>
    )
  }
}
