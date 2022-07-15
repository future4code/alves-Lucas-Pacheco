import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdmHome, goToPreviousPage } from '../routes/cordinator'
import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'
import { PaginaLogin, DivLogin, FormContainer, ContainerTituloCard, Title, InputForm, ButtonForm } from '../Styled/styledLoginPage'
import { Button } from '../Styled/styledHeader'
import { ToastContainer, toast } from 'react-toastify'



export default function LoginPage() {
  
  const navigate = useNavigate()
  const {form, handleChange} = useForm({email: "", password: ""})
  



  const onSubmitLogin = (event) => {
    event.preventDefault()      
    axios.post
      (`${BASE_URL}/login`, form)
      .then((res) => {
        toast.success("Você foi loogado")
        localStorage.setItem('token', res.data.token)
        goToAdmHome(navigate)
      })
      .catch((err) => {
        toast.error(`Não Autorizado`)

      })
  }

  return (
    <PaginaLogin>
    <DivLogin>
      <ContainerTituloCard>
      <Title>Login</Title>
      <Button onClick={() => goToPreviousPage(navigate)}>Voltar</Button>
      </ContainerTituloCard>
      <FormContainer onSubmit={onSubmitLogin}>
        <InputForm 
          name="email"
          placeholder='email'
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputForm
          name="password"
          placeholder='senha'
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"} />
        <ButtonForm>Entrar</ButtonForm>
      </FormContainer>
      
      </DivLogin>
      </PaginaLogin>
    
  )
}
