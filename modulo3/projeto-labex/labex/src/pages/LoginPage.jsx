import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdmHome, goToPreviousPage } from '../routes/cordinator'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
export  default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    }
    axios.post
    (`${BASE_URL}/login`, body)
    .then((res) => {
      console.log("Deu Certo", res.data)
      localStorage.setItem('token', res.data.token)
      goToAdmHome(navigate)
    })
    .catch((err) => {
        alert(`Não Autorizado`)
      
    })
  }
  
  return (
    <div>
      < Header />
      <h1>Login</h1>
      <input 
       placeholder='email'
       type="email"
       value={email}
       onChange={handleChangeEmail}/>
      <input 
      placeholder='senha'
      type="password"
      value={password}
      onChange={handleChangePassword}/>
      <button onClick={() => onSubmitLogin()}>Entrar</button>
      {/* <button onClick={() => goToAdmHome(navigate)}>Entrar</button> */}
      <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
      </div>
  )
}
