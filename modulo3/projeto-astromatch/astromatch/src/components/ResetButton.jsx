import React from 'react'
import axios from 'axios'
import { URL_CLEAR  } from '../constants/credentials'
import styled from 'styled-components'
import Reset from '../img/reset.jpg'
import { ButtonReset, DivButton } from './styledReset'
import { toast } from 'react-toastify';


export default function ResetButton(props) {

    const clear = () => {
        axios.put(`${URL_CLEAR}`)
        .then((res) => {
          toast("Busque novos amores", {
            icon: <img src={Reset} height="25px" width="25px" />
          })
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
