import React from "react";
import styled from "styled-components";

 export const AppWhats = styled.section `
    display:flex;
    justify-content: center;`

export const TerminalTotal = styled.div `
     max-width: 600px;
     height: 100vh;
     border:1px solid black;
     flex: 1 1 0%;
     display: flex;
     flex-direction: column-reverse;
     background-color: gray;`
   

 export const WhatLabTerminal = styled.section `
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    border: 2px solid black`


 export const DisplayDePerguntas = styled.section `
  display: grid;
  grid-template-columns: 120px 1fr 80px;
  gap: 12px;
  height: 40px;
  padding: 14px;
  border-radius: 50px;
  border: 1px black solid;
`

export const CaixaDeMensagem = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    border-radius: 5px;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    
`

export const NomeUsuario = styled.h4 `
     margin-bottom: 10px;
    font-weight: bold;`

export const CaixaDeMensagemTotal = styled.div `
    max-width: 40%;
    height: 100%;
    text-align: left;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
`