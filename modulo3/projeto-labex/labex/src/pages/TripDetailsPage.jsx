import Header from '../components/Header'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useGetData } from '../hooks/useGetData'
import { BASE_URL, HEADERS } from '../constants/credentiais'
import { useNavigate, useParams } from 'react-router-dom'


export default function TripDetailsPage() {
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState()
  const [tripInfo, setTripInfo] = useState()
  const [candidates, setCandidates] = useState([])

  
  
  useEffect(() => {
   setLoading(true)
   axios
   .get(`${BASE_URL}/trip/${params.id}`, HEADERS)
   .then((res) => {
    console.log(res)
    setLoading(false)
    setTripInfo(res.data.trip)
    setCandidates(res.data.trip.candidates)
   })
   .catch((err) => {
    setLoading(false)
    setErro(err.response.message)
    alert(erro)
   })
  }, [])

  const decisionCadidates = (candidatesId, choice) => {
    const body = {
      approve: choice
    }

    axios.put(`${BASE_URL}/trips/${tripInfo.id}/candidates/${candidatesId}/decide`, body, HEADERS)
    .then((res) => {
      if(choice === true) {
        alert("Candidato aprovado!")

      } else {
        alert("O Canditato foi reprovado")
      }
      document.location.reload(true)
    })
    .catch((err) => {
      alert("Um Erro aconteceu entre em contato com grupo de devs")
    })
  }
  const pendingCanditates = candidates.map((candidate) => {
    <div key={candidate.id}>
      <p>{candidate.name}</p>
      <p>{candidate.age}</p>
      <p>{candidate.profession}</p>
      <p>{candidate.country}</p>
      <p>{candidate.applicationText}</p>
      <button onClick={() => decisionCadidates(candidate.id, true)}>Aprovar</button>
      <button onClick={() => decisionCadidates(candidate.id, false)}>Reprovar</button>
    </div>
  })
  const aprovedCandidates = tripInfo && tripInfo.approved.map((candidate) => {
    <div key={candidate.id}>
    <p>{candidate.name}</p>
    <p>{candidate.age}</p>
    <p>{candidate.profession}</p>
    <p>{candidate.country}</p>
    <p>{candidate.applicationText}</p>
  </div>
  })
  

  return (
    <div>
      < Header />
      <h1>Informações da Viagem!</h1> 
      { tripInfo &&
      (tripInfo !== undefined ? ( 
      <>
      <p>{tripInfo.name}</p>
       <p>{tripInfo.planet}</p>
       <p>{tripInfo.durationInDays}</p>
       <p>{tripInfo.date}</p>
       <p>{tripInfo.description}</p>
       <h2>Candidatos Pendentes</h2>
       {pendingCanditates && pendingCanditates.length > 0 ? pendingCanditates : <h4> Não a candidatos pendentes</h4>}
       <h2>Candidatos Aprovados</h2>
       {aprovedCandidates && aprovedCandidates.length > 0 ?  aprovedCandidates : <h4>Não a candidatos aprovados </h4>}
       </> 
      ) : (
        <h1> Não Há Viagens planejadas! </h1>      
        ))}
      </div>
  )
}
