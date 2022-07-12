import AdminHomePage from '../pages/AdminHomePage'
import AplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={< HomePage />} />
        <Route path="ListTrips" element={< ListTripsPage />} />
        <Route path="AdminHome" element={<AdminHomePage idProps="id" />} />
        <Route path="AplicationForm" element ={< AplicationFormPage />} />
        <Route path="CreateTrip" element = { < CreateTripPage /> } />
        <Route path="Login" element = {< LoginPage /> } />
        <Route path="TripDetails/:id" element = {<TripDetailsPage />} />
    </Routes>
    </BrowserRouter>
  )
}


