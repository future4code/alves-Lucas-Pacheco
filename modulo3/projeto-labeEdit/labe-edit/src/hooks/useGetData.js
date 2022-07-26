import { BASE_URL, HEADER } from "../constants/credentiais";
import React, { useState, useEffect} from 'react'
import axios from 'axios'

export function useGetData(stateLike, path) {
    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState()
    
    useEffect(() => {
      setLoading(true)
      axios
      .get(`${BASE_URL}${path}`, HEADER)
      .then((res) => {
        setLoading(false)
        setDados(res.data)
      })
      .catch((err) => {
        setLoading(false)
        setErro(err.response.data)
      })
    }, [ stateLike, path])
  
  return {dados, loading, erro}
}