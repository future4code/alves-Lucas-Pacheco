import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToLoginPage, goToPreviousPage, goToHomePage } from '../routes/cordinator'

export default function Header() {
    const navigate = useNavigate()

  return (
    <div>
        <h4>Header</h4>
        <button onClick={() => goToLoginPage(navigate)}>Login</button>
        <button onClick={() => goToPreviousPage(navigate) }>Voltar</button>
        <button onClick={() => goToHomePage(navigate)}> Home Page </button>
    </div>
    
  )
}
