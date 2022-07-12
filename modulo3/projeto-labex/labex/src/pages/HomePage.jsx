import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { goToListTripsPage } from '../routes/cordinator'

export default function HomePage() {
  const navigate = useNavigate()


  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToListTripsPage(navigate)}> Ver Viagens </button>
      </div>
  )
}
