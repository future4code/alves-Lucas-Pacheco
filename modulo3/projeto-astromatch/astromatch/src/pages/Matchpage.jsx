import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_MATCHES, URL_CLEAR  } from '../constants/credentials'

export default function Matchpage(props) {
  const [matchUsers, setMatchUsers] = useState([])

  const getMatches = () => {
    axios.get(`${URL_MATCHES}`)
    .then((res) => {
      setMatchUsers(res.data.matches)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getMatches()

  }, [matchUsers])

  const displayMatch = matchUsers.map((person) => {
    return (<div>
    <img width={"150rem"} src={person.photo} alt={person.name} />
    <h4>{person.name}</h4>
    </div>
    ) 
    
  })

  const clear = () => {
    axios.put(`${URL_CLEAR}`)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

const onClickClear = () => {
clear()
alert('Busque Novos Amores')


}
  
  return (
    <div>
      <div> 
       <h1> AstroMatch</h1>
       <button onClick={() => props.goToHome()}>troca</button>
      </div>
      <div>
        {displayMatch}
        </div>
      <hr /> 
      <button onClick={onClickClear}></button>
      </div>
  )
}
