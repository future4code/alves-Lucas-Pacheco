import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
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

    onClickApagarMusica = (id) => {
        if (window.confirm(`Você Tem certeza que quer apagar essa música?`)) {
         axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`, {
                headers: {
                    Authorization: "lucas-magalhaes-alves"
                }
            }
        )
        .then((deletar) => {
            alert(`Está sendo apagado última chance de não fazer.`)
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
                <h1> Suas Músicas da Playlist: </h1>
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
              <h3> Informações Adicionais</h3>
              <a href="http://spoti4.future4.com.br/5.mp3">Musicas 1 a 100</a>
              <p> Neste Link em questão temos algumas músicas que vocês podem colocar, modifiquem o número 5 para entre 1 a 99 e poderá adicionar músicas diferentes, nosso site está no beta no futuro terão mais músicas a adicionar </p>
              </InformationAdd> 
                <hr />
            </ContainerPrincipal>
                {listaDeMusicasAtualizada}
            </DivLarge>
        )
    }
}
