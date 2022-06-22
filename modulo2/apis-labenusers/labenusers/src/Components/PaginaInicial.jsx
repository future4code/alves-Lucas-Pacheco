import React, { Component } from 'react'



export default class PaginaInicial extends Component {

  render() {
    return (
      <div>
      <input 
      value={this.props.nomeUsuario}
      onChange={this.props.onChangeNomeUsuario}
      placeholder="Nome Usuario"/>
      <input 
      value={this.props.emailUsuario}
      onChange={this.props.onChangeUsuarioEmail}
      placeholder="Email do Usuario"/>
      <button onClick={this.props.onClickCriarUsuario}> Enviar</button>
      <button onClick={() => this.props.mudandoTela()}>Trocar de Tela</button>
      </div>
    
    )
  }
}
