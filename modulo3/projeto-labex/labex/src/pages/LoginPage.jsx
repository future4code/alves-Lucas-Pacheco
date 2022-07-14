import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdmHome, goToPreviousPage } from '../routes/cordinator'
import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'



export default function LoginPage() {
  
  const navigate = useNavigate()
  const {form, handleChange} = useForm({email: "", password: ""})
  



  const onSubmitLogin = (event) => {
    event.preventDefault()      
    axios.post
      (`${BASE_URL}/login`, form)
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
      <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          placeholder='email'
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder='senha'
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"} />
        <button>Entrar</button>
      </form>
      <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
    </div>
  )
}
