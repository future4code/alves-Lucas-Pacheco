import React, {useState, useEffect} from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToPost } from '../routes/cordinator'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
import { useGetData } from '../hooks/useGetData'
import Cat from '../assets/cat.gif'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

export default function FeedPage() {
  const navigate = useNavigate()  
  const { dados, loading, erro } = useGetData("/posts")
  const {form, handleChange} = useForm({title: "", body: ""})
  console.log()

  useProtectedPage()

  const likeAndDeslikePost = (choice) => {
   const body = {
    direction: choice
   }
   axios.put(`${BASE_URL}/posts/${dados.id}/votes`, body, HEADER)
   .then((res) => {
    if(choice === +1){
      alert("Curtido")
    } else {
      alert("Descurtido")
    }
   })
   .catch((err) => {
    console.log(err)
  })
  }

  const displayPosts = dados && dados.map((posts) => {
    console.log(posts)
    return ( <section key={posts.id}>
     <p>Enviado por: {posts.username}</p>
     <h3>{posts.body}</h3>
     <div>
      <button onClick={() => likeAndDeslikePost(posts.userVote, +1)}> like</button>
      <p>{posts.voteSum}</p>
      <button onClick={() => likeAndDeslikePost(posts.userVote, -1)}> Deslike</button>
     </div>
     <div onClick={() => goToPost(posts.id, navigate)}>
      <img />
      <p>comentários
        {posts.comentCount}
      </p>
     </div>
    </section>
    )
  })

  const finalDisplay = () => {
    if(loading) {
      return <img  src={Cat} alt="Gatinho do Carregamento"/>
    } else if (!loading && erro) {
      return <h4>Veja sua Conexão com seu computador</h4>
    } else if (displayPosts && displayPosts.length > 0) {
      return <div>{displayPosts}</div>
    } else {
      return <h1>Não existe Post Disponível crie o seu!</h1>
    }
  } 
    
  return (
    <div>
      ;;;;sadsadsadsaddsadsadsa
        {finalDisplay()}
    </div>
  )
}
