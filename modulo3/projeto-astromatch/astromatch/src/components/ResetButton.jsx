import React from 'react'
import axios from 'axios'
import { URL_CLEAR  } from '../constants/credentials'
export default function ResetButton(props) {

    const clear = () => {
        axios.put(`${URL_CLEAR}`)
        .then((res) => {
            alert('Busque Novos Amores')
        })
        props.getUsers()
        
        .catch((err) => {
            console.log(err)
        })
    }
    
   
    
    
    
    
  return (
    <button onClick={clear}>Resetar Lista</button>
  )
}
