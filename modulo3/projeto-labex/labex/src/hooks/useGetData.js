import {BASE_URL} from '../constants/credentiais'
import React,{ useState, useEffect} from 'react'
import axios from 'axios'

export function useGetData(path) {
    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState()
    
    useEffect(() => {
      setLoading(true)
      axios
      .get(`${BASE_URL}${path}`)
      .then((res) => {
        setLoading(false)
        console.log(res)
        setDados(res.data)
      })
      .catch((err) => {
        setLoading(false)
        setErro(err.response.data)
      })
    }, [path])
  
  return {dados, loading, erro}
}
