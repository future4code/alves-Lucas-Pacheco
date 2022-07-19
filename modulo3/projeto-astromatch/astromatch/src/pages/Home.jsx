import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_PERSON, URL_CHOOSE } from '../constants/credentials'
import ResetButton from '../components/ResetButton'
import Coracao from '../img/Coracao1.png'
import X from "../img/X.jpg"
import Fire from "../img/purple.png"
import { Header } from '../components/header'
import { Image, SectionPeople, SectionButton } from '../components/styledHome'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


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
                    toast(` você tem um Match com ${users.name}`, {
                        icon: <img src = {Fire} height="25px" width="25px" />
                    })
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
            <Header>
                <h1> AstroMatch </h1>
                <button type="button" onClick={() => props.goToMatchScreen()}><img src={Fire} height="40rem" width="40rem"></img></button>
            </Header>
            <SectionPeople>
                {users ? (
                    <SectionPeople>
                        <Image src={users.photo} alt={users.name} />
                        <p>Nome: {users.name}, idade: {users.age} </p>
                        <p> Biografia: {users.bio} </p>
                        <SectionButton>
                            <button onClick={() => { choosePeople(users.id) }}><img src={Coracao} height="40rem" width="40rem"></img></button>
                            <button onClick={getUsers}><img src={X} height="40rem" width="40rem"></img></button>
                        </SectionButton>
                    </SectionPeople>)
                    :
                    (<div>
                        <p>Tenha seu sonho de amor e veja seus Matches</p>
                        <ResetButton getUsers={getUsers} />
                    </div>)
                }
            </SectionPeople>

        </div>
    )


}