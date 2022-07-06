import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { URL_PERSON, URL_CHOOSE } from '../constants/credentials'

export default function Home(props) {

 const [users, setUsers] = useState({})
 
 const getUsers = () => {
  axios.get(`${URL_PERSON}`)
  .then((res) => {
    console.log(res.data.profile)
    setUsers(res.data.profile)
    
  })
  .catch((err) => {
    console.log(err)
  })
}

useEffect(() => {
    getUsers()
}, [])

 
  return (
    <div>
        <div> 
            <h1> AstroMatch</h1>
            <button onClick={() => props.goToMatchScreen()}>troca</button>
        </div>
        <div>
        <img src={users.photo} alt={users.name} />
        <h2>Nome: {users.name}</h2>
        <h3>idade: {users.age}</h3>
        <p> Biografia: {users.bio} </p>
        </div>
    </div>
  )


}