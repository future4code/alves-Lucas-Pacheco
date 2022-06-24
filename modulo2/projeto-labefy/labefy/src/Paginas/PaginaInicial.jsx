import React, { Component } from 'react'
import axios from 'axios'

export default class PaginaInicial extends Component {


  

  render() {
    return (
      <div>
  
      <button onClick={() => this.props.irParaPlaylist()}> Veja suas Playlists</button>
      </div>
    )
  }
}
