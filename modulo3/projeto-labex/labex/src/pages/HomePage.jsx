import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { goToListTripsPage } from '../routes/cordinator'
import Header from '../components/Header'
import { Button } from '@chakra-ui/react'
export default function HomePage() {
  const navigate = useNavigate()


  return (
    <div>
      < Header />
      <h1>HomePage</h1>
      <Button onClick={() => goToListTripsPage(navigate)}> Ver Viagens </Button>
      </div>
  )
}
