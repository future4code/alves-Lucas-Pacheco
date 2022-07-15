import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_URL } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'
import { goToPreviousPage } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { Countries } from '../components/Countries'


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
        alert(`Ìnscrição realizada com sucesso!`)
        cleanFields()
        setLoading(false)
      })
      .catch((err) => {
        alert(err.response.message)
      })
  }


  return (
    <div>
      
      <h1>Se Cadastre para uma Viagem</h1>
      <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
      <form onSubmit={onSubmitCreate}>
        <select name={'tripId'}
          value={form.tripId}
          onChange={handleChange}
          required>
          <option value="" disabled>Escolha Uma Aventura</option>
          {dados && trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>{trip.name}</option>
            )
          })}
        </select>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          pattern={"^.{3,}"}
          title={"Seu nome deve ter no mínimo 3 letras"}
          required
        />
        <input
          name='age'
          type='number'
          value={form.age}
          onChange={handleChange}
          placeholder='Idade'
          min={16}
          required
        />
        <input
          name='applicationText'
          value={form.applicationText}
          onChange={handleChange}
          placeholder='Por que você gostaria de viajar conosco?'
          pattern={"^.{10,}"}
          title={"Vamos escreva mais um pouco!"}
          required
        />
        <input
          name='profession'
          value={form.profession}
          onChange={handleChange}
          placeholder='Sua profissão'
          pattern={"^.{2,}"}
          title="Sua profissão precisa ter mais que 2 caracteres"
        />

        <select
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
        </select>
        <button>Enviar sua inscrição!</button>
      </form>
    </div>
  )
}
