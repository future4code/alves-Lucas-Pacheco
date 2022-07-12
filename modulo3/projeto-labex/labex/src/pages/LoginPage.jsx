import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdmHome, goToPreviousPage } from '../routes/cordinator'

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <div>
      < Header />
      <h1>Login</h1>
      <button onClick={() => goToAdmHome(navigate)}>Entrar</button>
      <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
      </div>
  )
}
