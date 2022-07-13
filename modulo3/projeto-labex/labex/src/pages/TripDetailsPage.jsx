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

  // const { dados, loading, erro } = useGetData(`/trip/${params.id}`)
  // const tripsInfo = dados?.trip
  
  
  useEffect(() => {
   setLoading(true)
   axios
   .get(`${BASE_URL}/trip/${params.id}`, HEADERS)
   .then((res) => {
    console.log(res)
    setLoading(false)
    setTripInfo(res.data.trip)
   })
   .catch((err) => {
    setLoading(false)
    setErro(err.response.message)
    alert(erro)
   })
  }, [])

  return (
    <div>
      < Header />
      <h1>Informações da Viagem!</h1> 
      { tripInfo && <><p>{tripInfo.name}</p>
       <p>{tripInfo.planet}</p>
       <p>{tripInfo.durationInDays}</p>
       <p>{tripInfo.date}</p>
       <p>{tripInfo.description}</p>
       </> 
      }
      </div>
  )
}
