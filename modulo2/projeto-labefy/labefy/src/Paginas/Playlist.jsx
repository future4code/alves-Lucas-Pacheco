import React, { Component } from 'react'
import axios from 'axios'

export default class Playlist extends Component {
    state = {
    playlistDeMusicas: [],
    erro: "",  
    }
    
    todasPlaylists = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
              Authorization: "lucas-magalhaes-alves"
            }
          }
          )
          .then((listaDePlaylists) => {
            this.setState({ playlistDeMusicas: listaDePlaylists.data.result.list })
          })
          .catch((error) => {
            this.setState({ erro: error.response.data })
          })
      }
    
      onClickApagarPlaylist = (id) => {
        if (window.confirm("Você tem certeza que quer apagar?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
              headers: {
                Authorization: "lucas-magalhaes-alves"
              }
            }
            )
            .then((deletar) => {
              console.log(deletar)
              alert("Está Sendo Apagado!")
            })
    
            .catch((error) => {
              alert(error.response.data)
            })
        }
      }

      componentDidMount() {
        this.todasPlaylists()
      }
    
      componentDidUpdate() {
        this.todasPlaylists()
      }

  render() {
    const listaDePlaylistsAtualizada = this.state.playlistDeMusicas.map((playlist) => {
        return <div key={playlist.id}>
          <li onClick={() => this.props.irParaDetalhes()}>{playlist.name}</li>
          <button onClick={() => this.onClickApagarPlaylist(playlist.id)}>Apagar Playlist</button>
          </div>
    })

    return (
      <div>
        <h1> VEJA SUAS PLAYLISTS</h1>
        {listaDePlaylistsAtualizada}
        <hr />
        <button onClick={() => this.props.irParaTelaAdicionar()}> Adicione Novas músicas</button>
      </div>
    )
  }
}
