import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import {GiDaggerRose, GiEvilFork, GiExtraTime, GiFluffyTrefoil} from "react-icons/gi"

 const ContainerPrincipal = styled.div `
 display: flex;
 flex-direction: Column;
 justify-content: center;
 align-items: center;
 background-color: lightcyan;
 
 `

const  ContainerSongs = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 border: 2px orange solid;
 background-color: lightcyan;
 border-radius: 1rem;
 margin-bottom: 0.5%;

 h1 {
    color: pink;
    text-align: center;
    font-size: 1.4rem;
 }

 h4 {
    color: purple;
    text-align: center;
    font-size: 1.3rem;
 }

 button {
    margin-right: -3%;
    background-color: lightblue;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    margin-top: 3%;
    width: 20%;
    font-size: 1.3rem;
    border-radius: 1rem;

 }
 button:hover {
    background-color: purple;
    color: red;
 }
 button:active {
    background: lightyellow;
    color: darkblue;
 }
 audio {
    align-items: center;
 }
`


const  ContainerInicial = styled.div `
color: pink;
text-align:center;

button {
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 1rem;
    font-size: 1rem;

}

button:hover {
    background-color: pink;
    color: red;
 }

p {
     color: purple;
     font-size: 1.2rem;
}`

const ContainerAdicionarMusica = styled.div `
background-color: lightcyan;
 display: flex;
 flex-direction: column;
 justify-content: center;
 font-size: 2rem;
 margin-bottom: 2%;

 h1 {
    text-align: center;
    color: pink;
 }

 input {
 background-color: lightcyan;
 margin-bottom: 3%;
 font-size: 1rem;

}
button {
    margin-right: 2%;
    background-color: lightblue;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;

 }
 button:hover {
    background-color: purple;
    color: red;
 }
 button:active {
    background: lightyellow;
    color: darkblue;
 }`
 
 const InformationAdd = styled.div `
  text-align:center;
  border : 1px solid orange;
  border-radius: 1rem;
  h3 {
    color: pink;
    font-size: 1.5rem;
  }
  
  p {
    color: purple;
    font-size: 1.2rem;
  }`

const DivLarge = styled.div `
background-color: lightcyan;
height: 100%;
`

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
