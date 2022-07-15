import React, { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToPreviousPage, goToAplicationForm } from '../routes/cordinator'
import Header from '../components/Header'

export default function ListTripsPage() {
  const navigate = useNavigate()
  const { dados, loading, erro } = useGetData("/trips")
  const trips = dados?.trips

  const displayTrips = () => {
    if (loading) {
      return <p> Teste </p>
    } else if (!loading && erro) {
      return <p>{erro}</p>
    } else if (trips && trips.length > 0) {
      return trips.map((trip) => {
        return <div key={trip.id}>
          <h1>{trip.name}</h1>
          <p>{trip.description}</p>
          <p>{trip.planet}</p>
          <p>{trip.durationInDays}</p>
          <p>{trip.date}</p>
        </div>
      })
    } else if (trips?.length === 0) {
      return <p> Nenhuma viagem disponível. </p>
    }
  }



  return (
    <div>
      <h1> LISTA DE VIAGENS </h1>
      <button onClick={() => goToAplicationForm(navigate)}>Se Inscreva</button>
      <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
      {displayTrips()}
    </div>
  )
}
