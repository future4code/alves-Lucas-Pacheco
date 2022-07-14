import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../constants/credentiais'
import { useForm } from '../hooks/useForm'
import { goToListTripsPage } from '../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
export default function ApplicationFormPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {form, handleChange, cleanFields} = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "", 
    country: "",
    tripId: ""
  })
  const [dados, loading, erro] = useGetData("/trips")
  
  const onSubmitCreate = () => {
    
  }
  return (
    <div>
      < Header />
      <h1>ApplicationFormPage</h1></div>
  )
}
