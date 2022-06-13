import React, { Component } from 'react'
import styled from 'styled-components'

const EstiloCaixa = styled.div `
 display: flex;
 flex-direction: column;
 align-items: Center;
 text-align: center;`

export default class DadosGerais extends Component {
    state = {
        valorinputNome: "",
        valorInputEmail: "",
        valorInputIdade: "",

        valorSelect: "",

    }


    

    onChangeInputNome = (event) => {
        this.setState({
            valorinputNome: event.target.value
        })

    }

    onChangeInputEmail = (event) => {
        this.setState({
            valorinputEmail: event.target.value
        })

    }

    onChangeInputIdade = (event) => {
        this.setState({
            valorInputIdade: event.target.value
        })

    }

    onChangeSelect = (event) => {
        this.setState ({
            valorSelect: event.target.value
        })
    }



  render() {
  
    return (
      <EstiloCaixa>
        <h1> Etapa1 - Dados Gerais </h1>
        <h4>1. Qual Seu Nome</h4>
        <input 
         value={this.state.valorinputNome}
         placeholder={"Nome"}
         onChange={this.OchangeInputNome}
        />
      
        
        <h4>2 Qual Sua idade</h4>
        <input 
         value={this.state.valorInputIdade}
         placeholder={"Idade"}
         onChange={this.OchangeInputIdade}
        />
       
        
         <h4>3 Qual Seu Email</h4>
        <input 
         value={this.state.valorInputEmail}
         placeholder={"Email"}
         onChange={this.OchangeInputEmail}
        />
        <h4>4 Sua Escolaridade</h4>
        <select onChange={this.onChangeSelect} >
            <option value="medioIncompleto">Medio Incompleto</option>
            <option value="medioCompleto"> Medio Completo </option>
            <option value="SuperiorComeçado"> Superior Começando</option>
            <option value="SuperioFinalizado"> Superior finalizado</option>
        </select>
      
        
      </EstiloCaixa>
    )
  }
}
