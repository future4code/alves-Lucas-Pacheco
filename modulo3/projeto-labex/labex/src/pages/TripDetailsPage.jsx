
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../constants/credentiais'
import { useNavigate, useParams } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { ButtonDetails, DivDetails, P, PaginaDetails } from '../Styled/styledTripDetails'
import { H1 } from '../Styled/styledAdmHome'
import { goToPreviousPage } from '../routes/cordinator'
import { ToastContainer, toast } from 'react-toastify'
import { ButtonGroup } from '@chakra-ui/react'
import { DivTrip } from '../Styled/styledListTrip'
import Gif from '../assents/loading.gif'


export default function TripDetailsPage() {
  const navigate = useNavigate()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState()
  const [tripInfo, setTripInfo] = useState()
  const [candidates, setCandidates] = useState([])

  useProtectedPage()
  
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

  const decisionCadidatesApproved = (candidatesid) => {
    const body = {
      approve: true
    }

    axios.put(`${BASE_URL}/trips/${tripInfo.id}/candidates/${candidatesid}/decide`, body, HEADERS)
    .then((res) => {
      toast("Você foi aprovado")

     
      document.location.reload(true)
    })
    .catch((err) => {
      toast.error("Um Erro aconteceu entre em contato com grupo de devs")
    })
  }

  const decisionCadidatesReproved = ( candidatesid) => {
    const body = {
      approve: false
    }

    axios.put(`${BASE_URL}/trips/${tripInfo.id}/candidates/${candidatesid}/decide`, body, HEADERS)
    .then((res) => {
      toast.success("Foi Reprovado")

     
      document.location.reload(true)
    })
    .catch((err) => {
      toast.error("Um Erro aconteceu entre em contato com grupo de devs")
    })
  }


  const pendingCanditates = candidates?.map((candidate) => {
    return <DivTrip key={candidate.id}>
      <p><b>nome:</b> {candidate.name}</p>
      <p><b>idade:</b> {candidate.age}</p>
      <p><b>profissão</b> {candidate.profession}</p>
      <p><b>País:</b> {candidate.country}</p>
      <p><b>Texto De Candidatura: </b>{candidate.applicationText}</p>
      <ButtonGroup>
      <ButtonDetails onClick={() => decisionCadidatesApproved(candidate.id)}>Aprovar</ButtonDetails>
      <ButtonDetails onClick={() => decisionCadidatesReproved(candidate.id)}>Reprovar</ButtonDetails>
      </ButtonGroup>
    </DivTrip>
  })
  
  const aprovedCandidates = tripInfo && tripInfo.approved.map((candidate) => {
    return <DivTrip key={candidate.id}>
    <b>Informações do Candidato: {candidate.name}</b>
    <p>{candidate.name}</p>
    <p>{candidate.age}</p>
    <p>{candidate.profession}</p>
    <p>{candidate.country}</p>
    <p>{candidate.applicationText}</p>
  </DivTrip>
  })
  

  return (
    <PaginaDetails>
      <div>
      <H1>{tripInfo && tripInfo.name}</H1> 
      {loading && <img src={Gif}  alt='Gif Loading'/> }
      {!loading && tripInfo &&
      (tripInfo !== undefined ? ( 
      <DivDetails>
        <DivTrip>
       <p><b>Nome:</b>{tripInfo.name}</p>
       <p><b>Planeta:</b>{tripInfo.planet}</p>
       <p><b>Duração:</b>{tripInfo.durationInDays}</p>
       <p><b>Data:</b>{tripInfo.date}</p>
       <p><b>Descrição:</b>{tripInfo.description}</p>
       <ButtonDetails onClick={() => goToPreviousPage(navigate)}>Voltar</ButtonDetails>
       </DivTrip>
       <H1>Candidatos Pendentes</H1>
       {pendingCanditates && pendingCanditates.length > 0 ? pendingCanditates : <H1> Não a candidatos pendentes</H1>}
       <H1>Candidatos Aprovados</H1>
       {aprovedCandidates && aprovedCandidates.length > 0 ?  aprovedCandidates : <H1>Não a candidatos aprovados </H1>}
       </DivDetails> 
      ) : (
        <H1> Não Há Viagens planejadas! </H1>      
        ))}
        </div>
      </PaginaDetails>
  )
}
