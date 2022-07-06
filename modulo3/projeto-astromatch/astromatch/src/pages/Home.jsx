import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_PERSON, URL_CHOOSE} from '../constants/credentials'

export default function Home(props) {

    const [users, setUsers] = useState({})

    const getUsers = () => {
        axios.get(`${URL_PERSON}`)
            .then((res) => {
                setUsers(res.data.profile)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    const choosePeople = (id) => {
        const body = {
            id: id,
            choice: true
        }
        
        axios.post(`${URL_CHOOSE}`, body)
            .then((res) => {
                if (res.data.isMatch) {
                    alert(`Deu Match ${users.name}`)
                } 
                getUsers()

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
                <div>
                    {users ? (
                        <div>
                            <img width={'150rem'} src={users.photo} alt={users.name} />
                            <h2>Nome: {users.name}</h2>
                            <h3>idade: {users.age}</h3>
                            <p> Biografia: {users.bio} </p>
                            <hr />
                            <button onClick={() => { choosePeople(users.id) }}>Gostei</button>
                            <button onClick={getUsers}>Próximo</button>
                        </div>)
                        :
                        (<p>Tenha seu sonho de amor e veja seus Matches</p>)
                    }
                </div>
            </div>
        </div>
    )


}