import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../constants/credentiais'


export default function CreateTripPage() {
  const [name, setName] = useState()
  const [planet, setPlanet] = useState()
  const [date, setDate] = useState()
  const [description, setDescription] = useState()
  const [durationInDays, setDurantionInDays] = useState()

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const handleChangeDate = (event) => {
    setDate(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleChangeDuration = (event) => {
    setDurantionInDays(event.target.value)
  }

  const onSubmitCreateTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    }
    axios
    .post(`${BASE_URL}/trips`, HEADERS, body)
    .then((res) => {
      alert(`Sua Viagem foi criado!`)
    })
    .catch((err) => {
      alert(err.response.message)
    })

  }
  
  return (
    <div>
      < Header />
      <div>
      <h1>Criar Viagem</h1>
      <input 
       placeholder='Nome da Viagem'
       type="text"
       value={name}
       onChange={handleChangeName}/>
      <input 
      placeholder='planet'
      type="text"
      value={planet}
      onChange={handleChangePlanet}/>
      <input 
      placeholder='data'
      type="date"
      value={date}
      onChange={handleChangeDate}/>
      <input 
      placeholder='descrição'
      type="text"
      value={description}
      onChange={handleChangeDescription}/>
      <input 
      placeholder='Duração em Dias'
      type="Number"
      value={durationInDays}
      onChange={handleChangeDuration}/>
      <button onClick={onSubmitCreateTrip}>Criar Viagem</button>
      </div>
    </div>
  )
}
