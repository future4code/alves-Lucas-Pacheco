import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import  useForm  from '../hooks/useForm'
import { goToLogin } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { H1 } from '../style/StyleadRegistration'
import { DivForm } from '../style/StyleadLoginPage'
import { MainContainer } from '../style/StyleadMainContainer'
import Header from '../components/Header'
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
    <MainContainer>
      
        <H1>Olá, boas vindas ao LabEddit ;) </H1>
        <DivForm>
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
        </DivForm>
    </MainContainer>
  )
}

export default RegistrationPage