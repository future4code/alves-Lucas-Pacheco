import React, { Component } from 'react'
import axios from 'axios'

export default class PaginaInicial extends Component {
    state = {
        valorInputPlaylist: "",
    }

    OnClickCriarPlaylist = () => {
        const novaPlaylist = {
          name: this.state.valorInputPlaylist
        }
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", novaPlaylist, {
            headers: {
              Authorization: "lucas-magalhaes-alves"
    
            }
          }
          )
          .then((respostaDaPlaylist) => {
            alert(`Sua Playlist foi enviada, já está a disposição`)
            this.setState({ valorInputPlaylist: "" })
          })
          .catch((erro) => {
            console.log(erro.data)
            alert(erro.data.message)
          })
    
      }
      
    
      onChangeValorInputPlaylist = (event) => {
        this.setState({ valorInputPlaylist: event.target.value })
      }

  

  render() {
    return (
      <div>
       <h1> TELA DE CADASTRO </h1>
       <hr />
    <label for="ImplementarPlaylist">Playlist</label>
      <input
        value={this.state.valorInputPlaylist}
        placeholder="Insira sua Playlist"
        id="ImplementarPlaylist"
        onChange={this.onChangeValorInputPlaylist} />
       <button onClick={this.OnClickCriarPlaylist}>Enviar sua Playlist</button>
       <hr />
      <button onClick={() => this.props.irParaPlaylist()}> Veja suas Playlists</button>
      </div>
    )
  }
}
