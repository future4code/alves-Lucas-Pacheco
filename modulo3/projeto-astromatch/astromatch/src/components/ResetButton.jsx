import React from 'react'
import axios from 'axios'
import { URL_CLEAR  } from '../constants/credentials'
import styled from 'styled-components'
import Reset from '../img/reset.jpg'
import { ButtonReset, DivButton } from './styledReset'



export default function ResetButton(props) {

    const clear = () => {
        axios.put(`${URL_CLEAR}`)
        .then((res) => {
          alert(`Busque novos amores!`)   
        })
        
        props.getUsers()
        
        .catch((err) => {
            console.log(err)
        })
    }
    
   
    
    
    
    
  return (
    <DivButton>
    <ButtonReset onClick={clear}><img src={Reset}height="60rem" width="60rem"></img></ButtonReset>
    </DivButton>
  )
}
