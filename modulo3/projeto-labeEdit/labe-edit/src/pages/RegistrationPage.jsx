import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import  useForm  from '../hooks/useForm'
import { goToLogin } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
    const navigate = useNavigate()

    const {form, handleChange, cleanFields} = useForm({ 
        username:"",
        email: "",
	    password: ""
    })

    const onSignup = (event) => {
        event.preventDefault()
        axios.post
        (`${BASE_URL}/users/signup`, form)
        .then((res) => {
            alert("Você se Cadastrou")
            console.log(res)
            cleanFields()
        })
        .cath((err) => {
            alert("Esse Email já foi cadastrado")
        })
    }

  return (
    <div>
        <section>
            <button onClick={() => goToLogin(navigate)}>entrar</button>
        </section>
        <h1>Olá, boas vindas ao LabEddit ;) </h1>
        <form onSubmit={onSignup}>
         <input 
         name='username'
         placeholder='Nome de usuário'
         type="text"
         value={form.username}
         onChange={handleChange}
         pattern={"^.{4,}"}
         required
         />
         <input 
         name="email"
         placeholder='email'
         type='email'
         onChange={handleChange}
         required
         />
         <input 
         name="password"
         placeholder='senha'
         type='password'
         value={form.password}
         onChange={handleChange}
         pattern={"^.{8,30}"}
         title={"Sua senha deve ter no minimo 8 caracteres a 30"}
         required
         />
         <button>Cadastre</button>
        </form>
    </div>
  )
}

export default RegistrationPage