
import './App.css';
import axios from "axios";
import React, { Component } from 'react'
import PaginaInicial from './Components/PaginaInicial';
import SegundaPagina from './Components/SegundaPagina';
import TerceiraPagina from './Components/TerceiraPagina';
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

  onClickApagarUsuario =  async(id) => {
     
    try {
      const deletar = await axios. 
      delete (
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
          
         headers: {
            Authorization: "lucas-magalhaes-alves"
  
          }

        })
        console.log(deletar)
     alert("Você tem certeza que quer apagar?")
    }
    catch (error) {
      alert(error.response.data)

    }
    

  }

 componentDidMount() {
  this.listaDeUsuarios()
 }

 componentDidUpdate() {
  this.listaDeUsuarios()
 }


 irParaTelaCadastro = () => {
  this.setState({tela: "cadastro"})
 }

 irParaLista = () => {
  this.setState({tela: "lista"})
 }

 irParaDetalhes = () => {
  this.setState({tela: "detalhes"})
 }
 

 exibindoNaTela = () => {
  switch (this.state.tela) {
    case "cadastro":
      return <PaginaInicial mudandoTela={this.irParaLista}
      nomeUsuario={this.state.nomeUsuario}
      emailUsuario={this.state.emailUsuario}
      onChangeNomeUsuario={this.onChangeNomeUsuario}
      onChangeUsuarioEmail={this.onChangeUsuarioEmail}
      onClickCriarUsuario={this.onClickCriarUsuario} />
    case "lista":  
      return <SegundaPagina mudandoTela={this.irParaTelaCadastro}
    listaDeUsuarios={this.listaDeUsuarios}
    onClickApagarUsuario={this.onClickApagarUsuario}
    listaDeNomes={this.state.listaDeNomes} 
    irParaDetalhes={this.irParaDetalhes}/>
  
    case "detalhes":
      return <TerceiraPagina mudandoTela={this.irParaLista} />
    


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



