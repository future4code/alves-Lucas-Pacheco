import React, { Component } from 'react'

export default class SegundaPagina extends Component {
  render() {
    const listaAtualizada = this.props.listaDeNomes.map((nomes) => {
        return <ul key={nomes.id}>
          <button onClick={() => this.props.irParaDetalhes()}>{nomes.name}</button>
          <button onClick={() => this.props.onClickApagarUsuario(nomes.id)}>X</button>
        </ul>
       })
  
    return (
      <div>
        <h1> LISTA DE USUÁRIOS</h1>
        <button onClick={()=>this.props.mudandoTela()}>Voltar ao Cadastro</button>
        {listaAtualizada}
      </div>
    )
  }
}
