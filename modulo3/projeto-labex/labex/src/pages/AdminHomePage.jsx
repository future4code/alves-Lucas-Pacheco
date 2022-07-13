import React, {useEffect} from 'react'
import Header from '../components/Header'
import { useNavigate} from 'react-router-dom'
import { goToPreviousPage, goToCreateTripPage, goToDetailsTrip } from '../routes/cordinator'
import { useGetData } from '../hooks/useGetData'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { HEADERS, BASE_URL } from '../constants/credentiais'
import axios from 'axios'



export default function AdminHomePage(props) {
  const navigate = useNavigate()
  const { dados, loading, erro } = useGetData("/trips")
  const trips = dados?.trips
  
  useProtectedPage()

  const handleClickDeleteTrip = (trip) => {
    axios
    .delete(`${BASE_URL}/trips/${trip.id}`,
    HEADERS
    )
    .then((res) => {
      alert(`A Viagem ${trip.name} foi deletado com sucesso`)
      finalTrip()
      navigate()
      
    })
    .catch((error) => {
      alert("Não foi possível deletar a viagem entre contato com a equipe de problemas")
    })
  }

  const tripsList = dados && trips && trips.map((trip) => {
    return <li key={trip.id}>
      <div onClick={() => goToDetailsTrip(navigate, trip.id)}>{trip.name}</div> <button onClick={() => handleClickDeleteTrip(trip)}>Deletar Viagem</button>
    </li>
  })

  useEffect(() => {
    finalTrip()
  },[])



  const finalTrip = () => {
    if (loading) {
      return <h4>Carregando</h4>

    } else if (!loading && erro) {
      return <h4>Veja sua Conexão com seu computador</h4>
    } else if (tripsList?.length > 0) {
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
