import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_MATCHES, URL_CLEAR  } from '../constants/credentials'
import { Header } from '../components/header'
import Fire from "../img/purple.png"
import {ScrollCard, ContainerMatches} from '../components/styledMatch'
import ResetButton from '../components/ResetButton'


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
    return (<ContainerMatches>
    <img  src={person.photo} alt={person.name} />
    <p>{person.name}</p>
    </ContainerMatches>
    ) 
    
  })


  
  return (
    <div>
      <Header> 
       <h1> AstroMatch</h1>
       <button onClick={() => props.goToHome()}><img src={Fire} height="40rem" width="40rem"></img></button>
      </Header>
      <ScrollCard>
        {displayMatch}
        </ScrollCard>
      <hr />
      <ResetButton />
      </div>
  )
}
