import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../routes/cordinator'
import Header from '../components/Header'
import { PaginaHome, SectionPage, ContainerButton, Button } from '../Styled/styledHomePage'



export default function HomePage() {
  const navigate = useNavigate()


  return (
    
      <PaginaHome>
      <SectionPage>
      <ContainerButton>
       <Button onClick={() => goToListTripsPage(navigate)}> Ver Viagens </Button>
       <Button onClick={() => goToLoginPage(navigate)}>Login</Button>
       </ContainerButton>
       </SectionPage>
      </PaginaHome>
     
  )
}
