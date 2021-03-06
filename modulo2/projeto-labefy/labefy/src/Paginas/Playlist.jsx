import React, { Component } from 'react'
import axios from 'axios'
import {GiYinYang, GiDaemonPull, GiDelighted} from  "react-icons/gi"
import { ContainerPrincipal, ContainerInputs, ContainerInputsButton, ViewPlaylist, ContainerPlaylist, DivFather } from './estilizacao/syledPlaylist'

 

 
export default class Playlist extends Component {

    state = {
        valorInputPlaylist: "",
        playlistDeMusicas: [],
        erro: ""
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

    componentDidMount() {
        this.todasPlaylists()
    }

    componentDidUpdate() {
        this.todasPlaylists()
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
                alert(erro.response.data.message)
            })

    }


    onChangeValorInputPlaylist = (event) => {
        this.setState({ valorInputPlaylist: event.target.value })
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
                    alert("Está Sendo Apagado!")
                })

                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }



    render() {
        const listaDePlaylistsAtualizada = this.state.playlistDeMusicas.map((playlist) => {
            return <ContainerInputs key={playlist.id}>
                <li>{playlist.name}</li>
                <ContainerInputsButton>
                <button onClick={() => this.onClickApagarPlaylist(playlist.id)}>Apagar Playlist <GiYinYang /></button>
                <button onClick={() => this.props.irParaDetalhes(playlist.id)}>Ver suas Músicas <GiDaemonPull /></button>
                </ContainerInputsButton>
            </ContainerInputs>
        })

        return (
            <DivFather> 
            <ContainerPrincipal>
                <ViewPlaylist>
                <h1> Seja Bem Vindo a Pagina De Playlist da Labefy</h1>
                <p> Nos da Labefy temos como intuito da cada um de vocês, uma oportunidade única de ouvir músicas de forma otimizada e renovadora</p>
                <hr />
                </ViewPlaylist>
                <hr />
                <ContainerPlaylist>
                <h2> Adicionar uma Playlist  </h2>
                <label for="ImplementarPlaylist">Playlist</label>
                <input
                    value={this.state.valorInputPlaylist}
                    placeholder="Insira sua Playlist"
                    id="ImplementarPlaylist"
                    onChange={this.onChangeValorInputPlaylist} />
               
                <ContainerInputsButton>
                <button onClick={this.OnClickCriarPlaylist}>Enviar sua Playlist < GiDelighted /></button>
                </ContainerInputsButton>
                </ContainerPlaylist> 
                <hr />
                </ContainerPrincipal>
                <ViewPlaylist>
                <h1> VEJA SUAS PLAYLISTS</h1>
                {listaDePlaylistsAtualizada}
                <hr />
                </ViewPlaylist>
                </DivFather>
        )
    }
}
