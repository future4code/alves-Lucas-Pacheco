import './App.css';
// import styled from 'styled-components';

import React, { Component } from 'react'
import PaginaInicial from './Paginas/PaginaInicial';
import Playlist from './Paginas/Playlist';
import DetalhesMusicas from './Paginas/detalhesMusicas';


export default class App extends Component {
  state = {
    telaAtual: "inicial",
    //playlistDeMusicas: [],
    // idDaPlaylist: [],
    playlistEscolhida: ""
   
  }


  irParaTelaAdicionar = () => {
    this.setState({ telaAtual: "inicial", playlistEscolhida:"" })
  }

  irParaPlaylist = () => {
    this.setState({ telaAtual: "playlist", playlistEscolhida:"" })
  }

  irParaDetalhes = (id) => {
    this.setState({ telaAtual: "detalhes" , playlistEscolhida: id})
  }

   exibirNaTela = () => {
    switch(this.state.telaAtual) {
      case "inicial":
        return  < PaginaInicial irParaPlaylist={this.irParaPlaylist}/>
      case "playlist":
        return < Playlist  
              idDaPlaylist={this.state.idDaPlaylist}
              onClickTelaDetalhes={this.onClickTelaDetalhes}
              todasPlaylists={this.todasPlaylists} 
              playlistDeMusicas={this.state.playlistDeMusicas} 
              irParaDetalhes={this.irParaDetalhes} id={this.state.playlistEscolhida}/>
      case "detalhes": 
        return < DetalhesMusicas 
              irParaDetalhes={this.irParaDetalhes} id={this.state.playlistEscolhida}
              irParaPlaylist={this.irParaPlaylist}/>

         

    }
   }

   onClickTelaDetalhes = (id) => {
    this.irParaDetalhes()
    this.onClickMostraDetalhes(id)
   }


  render() {
    return (
      <div>
      {this.exibirNaTela()}
      </div>
    )
  }
}
