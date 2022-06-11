
import './App.css';
import React from 'react';
import styled from 'styled-components'

const AppWhats = styled.section `
    display:flex;
    justify-content: center;`

const TerminalTotal = styled.div `
     max-width: 600px;
     height: 100vh;
     border:1px solid black;
     flex: 1 1 0%;
     display: flex;
     flex-direction: column-reverse;
     background-color: gray;`
   

const WhatLabTerminal = styled.section `
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    border: 2px solid black`


const DisplayDePerguntas = styled.section `
  display: grid;
  grid-template-columns: 120px 1fr 80px;
  gap: 12px;
  height: 40px;
  padding: 14px;
  border-radius: 50px;
  border: 1px black solid;
`

const CaixaDeMensagem = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    border-radius: 5px;

    
`

const NomeUsuario = styled.h4 `
     margin-bottom: 10px;
    font-weight: bold;`

const CaixaDeMensagemTotal = styled.div `
    max-width: 40%;
    height: 100%;
    text-align: left;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
`
  

class App extends React.Component {

  state = {
    mensagem: [
      
      {
        usuario: "",
        mensagem: "",
      },

    ],

    valorInputUsuario: "",
    valorInputMensagem: "",
  }
   
  adicionaMensagem = () => {
    const novaMensagem = {

      usuario: this.state.valorInputUsuario,

      mensagem: this.state.valorInputMensagem


    }

    const mensagemEnviada = [...this.state.mensagem, novaMensagem]

    this.setState ({
      mensagem: mensagemEnviada,
      valorInputUsuario: "",
      valorInputMensagem: "",
    })

  }
   
  onChangeInputUsuario = (event) => {
    this.setState ({
      valorInputUsuario: event.target.value

    })


  }
  onChangeInputMensagem = (event) => {
    this.setState ({
      valorInputMensagem: event.target.value
    })
  }
  
  render() {
    const listaDeMensagens = this.state.mensagem.map((mensagem) => {
      return <CaixaDeMensagem>
       <NomeUsuario>{mensagem.usuario}</NomeUsuario>
        <p>{mensagem.mensagem}</p>
            
               
       </CaixaDeMensagem>
    })
  return (
    <AppWhats>
    <TerminalTotal>
      <WhatLabTerminal>
        <CaixaDeMensagemTotal>
          {listaDeMensagens}
        </CaixaDeMensagemTotal>
       

      
      <DisplayDePerguntas>
        <input
        value= {this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuario"} />

       <input
        value= {this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Sua Mensagem"} />


        <button onClick={this.adicionaMensagem}>Enviar</button>
      </DisplayDePerguntas>
      </WhatLabTerminal>
      </TerminalTotal>
      </AppWhats>
  );
}

}
export default App;
