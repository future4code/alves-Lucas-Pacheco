import React, { Component } from 'react'

export default class TerceiraPagina extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.mudandoTela()}>Trocar de Tela</button>
      </div>
      
    )
  }
}
