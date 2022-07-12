import React from 'react'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { goToPreviousPage, goToCreateTripPage, goToDetailsTrip } from '../routes/cordinator'
import { useGetData } from '../hooks/useGetData'



export default function AdminHomePage() {
  const pathParams = useParams();
  const navigate = useNavigate()
  const { dados, loading, erro } = useGetData("/trips")
  const trips = dados?.trips

 
console.log(trips)
  const tripsList = dados && trips && trips.map((trip) => {
    return <li key={trip.id}>
      <div onClick={() => goToDetailsTrip(navigate, trip.id)}>{trip.name}</div>
    </li>
  })

  const finalTrip = () => {
    if(loading) {
      return <h4>Carregando</h4>

    } else if (!loading && erro) {
      return <h4>Veja sua Conexão com seu computador</h4>
    } else if (tripsList?.length > 0 ) {
    return (
      <div>{tripsList}</div>
    )
  } else {
    return <p>"Não há viagens programadas para seu período do Multiverso!"</p>
  }
    
    
  }

  return (
    <div>
      < Header />

      <h1>Lista de Viagens!</h1>
      <button onClick={() => goToCreateTripPage(navigate)}> Criar Trip </button>
      <button onClick={() => goToPreviousPage(navigate)}> Voltar</button>
      {finalTrip()}
    </div>
  )
}
