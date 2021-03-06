import axios from 'axios'
import React, { Component } from 'react'
import {GiDaggerRose, GiEvilFork, GiExtraTime, GiFluffyTrefoil} from "react-icons/gi"
import { ContainerPrincipal, ContainerSongs, ContainerInicial, ContainerAdicionarMusica, InformationAdd, DivLarge  } from './estilizacao/styledAddM'


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

    componentDidUpdate() {
        this.onClickMostraPorcariaDaMusicas()
    }

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

    onClickApagarMusica = (id) => {
        if (window.confirm(`Voc?? Tem certeza que quer apagar essa m??sica?`)) {
         axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`, {
                headers: {
                    Authorization: "lucas-magalhaes-alves"
                }
            }
        )
        .then((deletar) => {
            alert(`Est?? sendo apagado ??ltima chance de n??o fazer.`)
        })
        .catch((erro) => {
            alert(erro.response.data.mensage)
        }) 
        }
        
    }

      render() {
       const  listaDeMusicasAtualizada = this.state.listaDeMusicas.map((musica) => {
        return <ContainerSongs key={musica.id}>
            <h1>{musica.name} <GiExtraTime /> </h1>
            <h4>Nome do Artista: {musica.artist} <GiEvilFork /> </h4>
            <audio ref="audio_tag" src={musica.url} controls />
            <button onClick={() => this.onClickApagarMusica(musica.id)}>Apagar Musica <GiDaggerRose /></button>

        </ContainerSongs>

       })

        return (
            <DivLarge>
            <ContainerPrincipal>  
                <ContainerInicial>
                <h1> Retorne para Sua Playlist Aqui: </h1>
                <p>Voltar a sua Playlists clicando abaixo: </p>
                <button onClick={() => this.props.irParaPlaylist()}> Veja suas Playlists</button>
                </ContainerInicial>
                <ContainerAdicionarMusica>
                <h1> Suas M??sicas da Playlist: </h1>
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
              <button onClick={() => this.onClickAdicionarMusica(this.props.id)}>Enviar sua Musica < GiFluffyTrefoil /></button>
              </ContainerAdicionarMusica>
              <hr />
              <InformationAdd>
              <h3> Informa????es Adicionais</h3>
              <a href="http://spoti4.future4.com.br/5.mp3"  target="_blank">Musicas 1 a 100</a>
              <p> Neste Link em quest??o temos algumas m??sicas que voc??s podem colocar, modifiquem o n??mero 5 para entre 1 a 99 e poder?? adicionar m??sicas diferentes, nosso site est?? no beta no futuro ter??o mais m??sicas a adicionar </p>
              </InformationAdd> 
                <hr />
            </ContainerPrincipal>
                {listaDeMusicasAtualizada}
            </DivLarge>
        )
    }
}
