import React, { Component } from 'react'

export default class SegundaPagina extends Component {
  render() {
    const listaAtualizada = this.props.listaDeNomes.map((nomes) => {
        return <div key={nomes.id}>
          <li>{nomes.name}</li>
        </div>
       })
  
    return (
      <div>
        <button onClick={()=>this.props.mudandoTela("cadastro")}>Trocar de Tela</button>
        {listaAtualizada}
      </div>
    )
  }
}
