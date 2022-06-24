import React, { Component } from 'react'

export default class detalhesMusicas extends Component {
  render() {
    return (
      <div>
         <button onClick={() => this.props.irParaPlaylist()}> Veja suas Playlists</button>
      </div>
    )
  }
}
