import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import  useForm  from '../hooks/useForm'
import { goToregistry, goToFeed } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import CardLogin from '../components/CardLogin'
import { ButtonForm, ImageLogin, LineImg } from '../style/StyleadLoginPage'
import Logo from '../assets/Logo.svg'
import Line from '../assets/Line.svg'
import Header from '../components/Header'
import { MainContainer } from '../style/StyleadMainContainer'

const LoginPage = () => {
   const navigate = useNavigate()
   const {form, handleChange, cleanFields} = useForm({email: "", password: ""})
   

  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios.post
    (`${BASE_URL}/users/login`, form)
    .then((res) => { 
        alert(`Você logou`)
        console.log(res)
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
    })
    .catch((err) => {
        alert('Se Registre primeiro')
    })
  }  

  return (
    <MainContainer>
      
      <ImageLogin>
        <img src={Logo} alt="logo" />
        <p>O Projeto de Rede Social da Labenu</p>
        </ImageLogin>
       
        <CardLogin />
        <LineImg src={Line}  alt="Linha de divisão"/>
        <ButtonForm onClick={() => goToregistry(navigate)}>Se Cadastre</ButtonForm>
    </MainContainer>
  )
}

export default LoginPage