import './App.css';
// import styled from 'styled-components';
import axios from 'axios';
import React, { Component } from 'react'



export default class App extends Component {
  state = {
    playlistDeMusicas: [],
    valorInputPlaylist: "",
    telaAtual: "inicial",
    erro: ""
  }

  OnClickCriarPlaylist = () => {
    const novaPlaylist  = {
      name: this.state.valorInputPlaylist
    }
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", novaPlaylist , {
        headers: {
          Authorization: "lucas-magalhaes-alves"

        }
      }
    )
    .then((respostaDaPlaylist) => {
      console.log(respostaDaPlaylist)
      this.todasPlaylists()
      alert(`Sua Playlist foi enviada, já está a disposição`)
    })
    .catch((erro) => {
      console.log(erro.data)
      alert(erro.data.message)
    })

  }

  onChangeValorInputPlaylist = (event) => {
    this.setState({ valorInputPlaylist: event.target.value })
  }

  todasPlaylists = () => {
    axios
    .get (
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: "lucas-magalhaes-alves"
        }
      }
    )
    .then((listaDePlaylists) => {
      console.log(listaDePlaylists.data.result.list)
      this.setState({playlistDeMusicas: listaDePlaylists.data.result.list})
    })
    .catch((error) => {
      this.setState({erro: error.response.data})
    })
  }

  componentDidMount() {
    this.todasPlaylists()
  }

 


  render() {
   const  listaDePlaylistsAtualizada = this.state.playlistDeMusicas.map((playlist) => {
    return <div key={playlist.id}>
      <li>{playlist.name}</li>

    </div>
   })
    return (
      <div>
        <label for="ImplementarPlaylist">Playlist</label>
        <input 
        value={this.state.valorInputPlaylist}
        placeholder="Insira sua Playlist"
        id="ImplementarPlaylist"
        onChange={this.onChangeValorInputPlaylist}/>
      <button onClick={this.OnClickCriarPlaylist}>Enviar sua Playlist</button>
      <hr />
      <h1>LISTA DE PAMONHA</h1>
      {listaDePlaylistsAtualizada}
      </div>
    )
  }
}
