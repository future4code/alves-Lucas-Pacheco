
import React, { Component } from 'react'
import styled from 'styled-components'

const EstiloCaixa = styled.div `
 display: flex;
 flex-direction: column;
 align-items: Center;
 text-align: center;`

export default class  extends Component {
    state = {
        valorInputGraduacao: "",
        valorInputSelect: "",

    }
    

    onChangeInputGraduacao = (event) => {
        this.setState({
            valorInputGraduacao: event.target.value
        })

    }

    onChangeInputSelect = (event) => {
        this.setState({
            valorInputSelect: event.target.value
        })

    }
  render() {
    return (

      <EstiloCaixa>
        <h1> INFORMAÇÕES GERAIS DE ENSINO </h1>
        <h4>7 Por que não finalizou o Curso </h4>
        <input 
         value={this.state.valorInputGraduacao}
         placeholder={"Motivo"}
         onChange={this.onChangeInputGraduacao}
        />
        <h4> Você fez algum curso complementar</h4>
        <select onChange={this.onChangeInputSelect}>
            <option value="Curso Técnico">Curso Técnico</option>
            <option value="Curos de Inglês"> Curso Inglês </option>
        </select>
    
      </EstiloCaixa>
    )
  }
}
