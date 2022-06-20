
import './App.css';
import React from 'react';
import {AppWhats, TerminalTotal, WhatLabTerminal, DisplayDePerguntas, CaixaDeMensagem, NomeUsuario, CaixaDeMensagemTotal} from "./components/sytled"

  

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
