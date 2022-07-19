import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'
import { goToPreviousPage } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { Countries } from '../components/Countries'
import { ContainerButtonsCreate, FormCreate, InputForm, PaginaApp, SelectForm } from '../Styled/styledAppForm'
import { ButtonList, H1 } from '../Styled/styledAdmHome'
import { ToastContainer, toast } from 'react-toastify'

export default function ApplicationFormPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState()
  const { form, handleChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: ""
  })

  const { dados } = useGetData("/trips/")
  const trips = dados?.trips

  const onSubmitCreate = (event) => {
    event.preventDefault()
    setLoading(true)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios
      .post(`${BASE_URL}/trips/${form.tripId}/apply`, body)
      .then((res) => {
        toast.success(`Ìnscrição realizada com sucesso!`)
        cleanFields()
        setLoading(false)
      })
      .catch((err) => {
        toast.error(err.response.message)
      })
  }


  return (
    <PaginaApp>
      <div>
      <H1>Cadastre para uma Viagem</H1> 
      <FormCreate onSubmit={onSubmitCreate}>
        <SelectForm name={'tripId'}
          value={form.tripId}
          onChange={handleChange}
          required>
          <option value="" disabled>Escolha Uma Aventura</option>
          {dados && trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>{trip.name}</option>
            )
          })}
        </SelectForm>
        <InputForm
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          pattern={"^.{3,}"}
          title={"Seu nome deve ter no mínimo 3 letras"}
          required
        />
        <InputForm
          name='age'
          type='number'
          value={form.age}
          onChange={handleChange}
          placeholder='Idade'
          min={18}
          required
        />
        <InputForm
          name='applicationText'
          value={form.applicationText}
          onChange={handleChange}
          placeholder='Por que você gostaria de viajar conosco?'
          pattern={"^.{20,}"}
          title={"Vamos escreva mais um pouco!"}
          required
        />
        <InputForm
          name='profession'
          value={form.profession}
          onChange={handleChange}
          placeholder='Sua profissão'
          pattern={"^.{2,}"}
          title="Sua profissão precisa ter mais que 2 caracteres"
        />

        <SelectForm
          name={"country"}
          defaultValue={""}
          onChange={handleChange} required>
          <option value={''}>País de origem:</option>
          {Countries.map((countries) => {
            return (
              <option value={countries} key={countries}>
                {countries}
              </option>
            );
          })}
        </SelectForm>
        <ContainerButtonsCreate>
        <ButtonList>Enviar sua inscrição!</ButtonList>
        <ButtonList onClick={() => goToPreviousPage(navigate)}>Voltar</ButtonList>
        </ContainerButtonsCreate>
      </FormCreate>
        </div>
    </PaginaApp>
    
  )
}
