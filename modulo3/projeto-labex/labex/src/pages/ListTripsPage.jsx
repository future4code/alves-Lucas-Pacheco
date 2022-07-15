import React, { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToPreviousPage, goToAplicationForm } from '../routes/cordinator'
import Header from '../components/Header'
import { ButtonListTrip, ContainerButtonsList, DivTrip, PaginaListTrip } from '../Styled/styledListTrip'
import { H1 } from '../Styled/styledAdmHome'


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
        return <DivTrip key={trip.id}>
          <H1><b>Nome da Viagem: </b>{trip.name}</H1>
          <p><b>Descrição da Viagem:</b>  {trip.description}</p>
          <p><b>Planeta: </b> {trip.planet}</p>
          <p><b>Data: </b> {trip.date}</p>
          <p><b>Duração em Dias</b> {trip.durationInDays}</p>
        </DivTrip>
      })
    } else if (trips?.length === 0) {
      return <p> Nenhuma viagem disponível. </p>
    }
  }



  return (
    <PaginaListTrip>
      <div>
        <ContainerButtonsList>
      <ButtonListTrip
       onClick={() => goToAplicationForm(navigate)}>Se Inscreva</ButtonListTrip>
      <ButtonListTrip onClick={() => goToPreviousPage(navigate)}>Voltar</ButtonListTrip>
      </ContainerButtonsList>
      <H1> LISTA DE VIAGENS </H1>
      {displayTrips()}
      </div>
    </PaginaListTrip>
  )
}
