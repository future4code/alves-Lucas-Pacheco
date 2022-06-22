import React, { Component } from 'react'

export default class TerceiraPagina extends Component {
  render() {
    return (
      <div><button onClick={()=>this.props.mudandoTela()}>Voltar a Lista</button></div>
    )
  }
}
