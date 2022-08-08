import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import useForm from '../hooks/useForm'
import { goToFeed } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { DivForm } from '../style/StyleadLoginPage'


const CardLogin = () => {
  const navigate = useNavigate()
  const { form, handleChange, cleanFields } = useForm({ email: "", password: "" })


  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios.post
      (`${BASE_URL}/users/login`, form)
      .then((res) => {

        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        alert('Se Registre primeiro')
      })
  }
  return (
    <DivForm>
      <form onSubmit={onSubmitLogin}>
        <label for='email'>Email</label>
        <input
          name="email"
          placeholder='Email'
          type='email'
          value={form.email}
          onChange={handleChange}
          id='email'
          required
        />
        <label for='senha'>Senha</label>
        <input
          name='password'
          placeholder='Senha'
          type='password'
          value={form.password}
          onChange={handleChange}
          pattern={"^.{8,}"}
          title={"Sua senha deve ter no mínimo 8 caracteres e no máximo 30"}
          required
        />
        <button>Continuar</button>
      </form>
    </DivForm>
  )
}

export default CardLogin

