
import './App.css';
import axios from "axios";
import React, { Component } from 'react'
import PaginaInicial from './Components/PaginaInicial';
import SegundaPagina from './Components/SegundaPagina';
export default class App extends Component {
  state = {
    listaDeNomes: [],
    nomeUsuario: "",
    emailUsuario: "",
    erro: "",
    tela: "cadastro"

  }

  onClickCriarUsuario = () => {
    const novoUsuario = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", novoUsuario, {
        headers: {
          Authorization: "lucas-magalhaes-alves"

        }
      }
      )
      .then((respostaAoUsuario) => {
        console.log(respostaAoUsuario)
        respostaAoUsuario.status === 201 && alert(`Seu Usuário foi enviado`)
      })
      .catch((erroDoNovoUsuario) => {
        alert(erroDoNovoUsuario.response.data.message)
      })
  }

  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value })
  }

  onChangeUsuarioEmail = (event) => {
    this.setState({ emailUsuario: event.target.value })
  }
  
  listaDeUsuarios = () => {
    axios
    .get (
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      {
        headers: {
          Authorization: "lucas-magalhaes-alves"
        }
      }
    )
   .then((respostaDaLista) => {
    console.log(respostaDaLista)
    this.setState({listaDeNomes: respostaDaLista.data})

   })
   .catch((error) => {
    this.setState({ erro: error.response.data})
   })
  }

 componentDidMount() {
  this.listaDeUsuarios()
 }
 
 mudandoTela = (mudaTela) => {
  this.setState({tela: mudaTela})
 }

 exibindoNaTela = () => {
  if(this.state.tela === "cadastro") {
    return <PaginaInicial mudandoTela={this.mudandoTela}
    nomeUsuario={this.state.nomeUsuario}
    emailUsuario={this.state.emailUsuario}
    onChangeNomeUsuario={this.onChangeNomeUsuario}
    onChangeUsuarioEmail={this.onChangeUsuarioEmail}
    onClickCriarUsuario={this.onClickCriarUsuario} />
  } else {
    return <SegundaPagina mudandoTela={this.mudandoTela}
    listaDeUsuarios={this.listaDeUsuarios}
    listaDeNomes={this.state.listaDeNomes} />


  }
 }

    render() {
   

    return (
       <div>
        {this.exibindoNaTela()}
      </div>
    )
  }
}



