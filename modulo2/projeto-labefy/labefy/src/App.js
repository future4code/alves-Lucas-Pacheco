import './App.css';
// import styled from 'styled-components';
import axios from 'axios';
import React, { Component } from 'react'
import PaginaInicial from './Paginas/PaginaInicial';
import Playlist from './Paginas/Playlist';
import DetalhesMusicas from './Paginas/detalhesMusicas';


export default class App extends Component {
  state = {
    telaAtual: "inicial",
   
  }
 

  irParaTelaAdicionar = () => {
    this.setState({ telaAtual: "inicial" })
  }

  irParaPlaylist = () => {
    this.setState({ telaAtual: "playlist" })
  }

  irParaDetalhes = () => {
    this.setState({ telaAtual: "detalhes" })
  }

   exibirNaTela = () => {
    switch(this.state.telaAtual) {
      case "inicial":
        return  < PaginaInicial irParaPlaylist={this.irParaPlaylist}/>
      case "playlist":
        return < Playlist irParaDetalhes={this.irParaDetalhes} irParaTelaAdicionar={this.irParaTelaAdicionar} />
      case "detalhes": 
        return < DetalhesMusicas irParaPlaylist={this.irParaPlaylist} />   

    }
   }


  render() {
    return (
      <div>
      {this.exibirNaTela()}
      </div>
    )
  }
}
