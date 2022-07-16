import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { goToPreviousPage, goToCreateTripPage, goToDetailsTrip } from '../routes/cordinator'
import { useGetData } from '../hooks/useGetData'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { HEADERS, BASE_URL } from '../constants/credentiais'
import axios from 'axios'
import { ButtonDelete, ButtonList, ContainerButtons, DivAdm, DivName, H1, Image, PaginaAdm } from '../Styled/styledAdmHome'
import Comet from '../assents/comet.png'
import {  toast } from 'react-toastify'
import Gif from '../assents/loading.gif'




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
      toast(`A Viagem ${trip.name} foi deletado com sucesso`)
      finalTrip()
      document.location.reload(true)
    })
    .catch((error) => {
      toast.error("Não foi possível deletar a viagem entre contato com a equipe de problemas")
    })
  }

  const tripsList = dados && trips && trips.map((trip) => {
    return <DivAdm key={trip.id}>
      <DivName onClick={() => goToDetailsTrip(navigate,  trip.id)}>{trip.name}</DivName> 
      <ButtonDelete onClick={() => handleClickDeleteTrip(trip)}><Image src={Comet} /></ButtonDelete>
    </DivAdm>
  })

  useEffect(() => {
    finalTrip()
  },[])



  const finalTrip = () => {
    if (loading) {
      return <img src={Gif} alt="imagem Gif" /> 

    } else if (!loading && erro) {
      return <h4>Veja sua Conexão com seu computador</h4>
    } else if (tripsList?.length > 0) {
      return (
        <div>{tripsList}</div>
      )
    } else {
      return <H1>"Não há viagens programadas para seu período do Multiverso!"</H1>
    }
  }
   const onClickClearCache = () => {
    localStorage.clear("token")
    navigate("/Login/")
    toast("Você foi deslogado!")
   }

  return (
    <PaginaAdm>
      <div>
      <H1>Painel Adminstrativo!</H1>
      <ContainerButtons>
      <ButtonList onClick={() => goToCreateTripPage(navigate)}> Criar Trip </ButtonList>
      <ButtonList onClick={() => goToPreviousPage(navigate)}> Voltar</ButtonList>
      <ButtonList onClick={onClickClearCache}>Está deslogado!</ButtonList>
      </ContainerButtons>
      {finalTrip()}
      </div>
    </PaginaAdm>
  )
}
