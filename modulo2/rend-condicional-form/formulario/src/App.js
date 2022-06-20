
import './App.css';
import React, { Component } from 'react'
import Informacoes from './Paginas/Informacoes';
import InfoComplementar from './Paginas/InfoComplementar';
import FormularioFinal from './Paginas/FormularioFinal';
import DadosGerais from './Paginas/DadosGerais';
import styled from 'styled-components';


 const ContainerTelona = styled.div `
 display:flex;
 flex-direction:column;
 align-items: center;`

 const Botao = styled.button `
 margin-top: 2%;`

 class App extends Component {
  state = {
    tela: 1,
  }




  ExibeNaTela 
  = () => {
    switch(this.state.tela){
      case 1:
        return <DadosGerais />
      case 2:
        return <Informacoes />
      case 3:
        return <InfoComplementar />
      case 4:
        return <FormularioFinal />

    }
  }

  

  proximaPagina = () => {
    this.setState({ tela: this.state.tela + 1})
  }



  render() {
    return (
      <ContainerTelona>
       {this.ExibeNaTela()}

       {
        this.state.tela !== 4 &&
        <Botao onClick={() => this.proximaPagina()}>Próxima Pagina </Botao>
       }
      </ContainerTelona>
    )
  }
}


export default App;
