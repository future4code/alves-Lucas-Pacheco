 
import React, { Component } from 'react'
import styled from 'styled-components'

const EstiloCaixa = styled.div `
 display: flex;
 flex-direction: column;
 align-items: Center;
 text-align: center;`

export default class Informacoes extends Component {
    state = {
        valorInputCurso: "",
        valorInputUnidadeEnsino: "",

    }
    

    onChangeInputCurso = (event) => {
        this.setState({
            valorInputCurso: event.target.value
        })

    }

    onChangeInputCursoUnidade = (event) => {
        this.setState({
            valorInputUnidadeEnsino: event.target.value
        })

    }
  render() {
    return (
      <EstiloCaixa>
            <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h4>5 Qual Curso </h4>
        <input 
         value={this.state.valorInputCurso}
         placeholder={"Curso"}
         onChange={this.onChangeInputCurso}
        />
       
        
         <h4>6 Unidade de ensino </h4>
        <input 
         value={this.state.valorInputUnidadeEnsino}
         placeholder={"Local do Ensino"}
         onChange={this.onChangeInputCursoUnidade}
        />

       

      </EstiloCaixa>
    )
  }
}
