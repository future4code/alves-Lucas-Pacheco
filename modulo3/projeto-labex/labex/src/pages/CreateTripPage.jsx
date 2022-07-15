import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'
import { goToListTripsPage, goToPreviousPage } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { FormCreate, InputForm, PaginaCreate, ContainerButtonsCreate } from '../Styled/styledCreateTrip'
import { ButtonList, H1 } from '../Styled/styledAdmHome'
import { ToastContainer, toast } from 'react-toastify'
export default function CreateTripPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {form, handleChange, cleanFields} = useForm({
    name: "", 
    planet: "", 
    date: "", 
    description: "", 
    durationInDays: "" 
  })

 useProtectedPage()
 
  const onSubmitCreateTrip = (event) => {
    event.preventDefault()
    setLoading(true);
  

  axios.
  post(`${BASE_URL}/trips`,  form, HEADERS)
  .then((res) => {
    toast.success(`Viagem foi Cadastrada com sucesso!`)
    cleanFields()
    setLoading(false)
  }).catch((err) => {
   console.log(err)
  })
}


  
  return (
    <PaginaCreate>
      
      
     

      <div>
      <H1>Criando viagem</H1>
        <FormCreate onSubmit={onSubmitCreateTrip}> 
        <InputForm 
        placeholder='Nome' type="text" 
        value={form.name} 
        name={"name"} 
        onChange={handleChange} 
        pattern={"^.{3,}"} 
        title={"Nenhuma viagem deve ter menos de 3 letras, se tiver...  Aumente o nome"} 
        required
        />
        <InputForm
         placeholder='planet'
         value={form.planet}
         name={"planet"}
         onChange={handleChange}
         pattern={"^.{5,}"}
         title={"Planetas não pode ter menos que 5 letras"}
         required
         />
         <InputForm
          placeholder='Data' 
          type="Date" 
          id="inputDate" 
          name={"date"}
          value={form.date}
          onChange={handleChange}
          required/>
          <InputForm 
          placeholder='Descrição'
          value={form.description}
          name={"description"}
          onChange={handleChange}
          pattern={"^.{20,}"}
          title={"Descrição deve ter no mínimo 20 caracteres"}
          required 
          />
          <InputForm 
          placeholder='Duração em Dias'
          value={form.durationInDays}
          name={"durationInDays"}
          onChange={handleChange}
          min={50}
          type='Number'/>
          <ContainerButtonsCreate>
          <ButtonList>Enviar</ButtonList>
          <ButtonList onClick={() => goToListTripsPage(navigate)}>Ver a Lista de Trips</ButtonList>
          <ButtonList onClick={() => goToPreviousPage (navigate)}> Voltar</ButtonList>
          </ContainerButtonsCreate>
          </FormCreate>
          
      </div>
      </PaginaCreate>
    
  )
}
