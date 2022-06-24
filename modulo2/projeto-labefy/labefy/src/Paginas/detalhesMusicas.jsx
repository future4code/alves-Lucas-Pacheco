import axios from 'axios'
import React, { Component } from 'react'

export default class detalhesMusicas extends Component {
    state = {
        listaDeMusicas: [],
        valorInputAdicionarMusica: "",
        valorInputAdicionarArtista: "",
        valorInputAdicionarUrl: "",
   
    }

    componentDidMount() {
        this.onClickMostraPorcariaDaMusicas()
    }

    // componentDidUpdate() {
    //     this.onClickMostraPorcariaDaMusicas()
    // }

    onClickMostraPorcariaDaMusicas = (id) => {
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
            headers: {
              Authorization: "lucas-magalhaes-alves"
            }
          }
          )
          .then((verDetalhes) => {

            this.setState({listaDeMusicas: verDetalhes.data.result.tracks})
            // this.setState({idDaPlaylist: id })
          })
          .catch((erro) => {
            alert((erro.response.data.mensage))
          })
      }
      

   

    onClickAdicionarMusica = (id) => {
        const novaMusica = {
            name: this.state.valorInputAdicionarMusica,
            artist: this.state.valorInputAdicionarArtista,
            url: this.state.valorInputAdicionarUrl

        }
        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, novaMusica, {
                headers: {
                    Authorization: "lucas-magalhaes-alves"
                }

            }
            )
            .then((respostaDaMusica) => {
                alert(`Sua Musica foi enviada para a Playlist`)
                this.setState({ valorInputAdicionarMusica: "", valorInputAdicionarArtista: "", valorInputAdicionarUrl: "", })
                this.onClickMostraPorcariaDaMusicas()
            })
            .catch((erro) => {
                console.log(erro.data)
                alert(erro.data.message)
            })
    }

    onChangeValorInputAdicionarMusica = (event) => {
        this.setState({ valorInputAdicionarMusica: event.target.value })
    }

    onChangeValorInputAdicionarArtista = (event) => {
        this.setState({ valorInputAdicionarArtista: event.target.value })
    }

    onChangeValorInputAdicionarUrl = (event) => {
        this.setState({ valorInputAdicionarUrl: event.target.value })
    }



    
 
  
    render() {
       const  listaDeMusicasAtualizada = this.state.listaDeMusicas.map((musica) => {
        return <div key={musica.id}>
            <li>{musica.name}</li>
            <li>{musica.artist}</li>
             <li>{musica.url}</li>
            <audio ref="audio_tag" src={musica.url} controls />

        </div>

       })

    

        return (
            <div>
                {listaDeMusicasAtualizada}
                <input
               value={this.state.valorInputAdicionarMusica}
               placeholder="Insira nome da Sua Musica"
               onChange={this.onChangeValorInputAdicionarMusica} />
                <input
               value={this.state.valorInputAdicionarArtista}
               placeholder="Insira o nome do seu artista"
               onChange={this.onChangeValorInputAdicionarArtista} />

               <input
               value={this.state.valorInputAdicionarUrl}
               placeholder="Insira URL da sua musica"
               onChange={this.onChangeValorInputAdicionarUrl} />

              <button onClick={() => this.onClickAdicionarMusica(this.props.id)}>Enviar sua Playlist</button>
                <hr />

                <button onClick={() => this.props.irParaPlaylist()}> Veja suas Playlists</button>

            </div>
        )
    }
}
