import React, {useEffect, useState} from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetalhes from '../components/CardDetalhes'
import CreateComments from '../components/CreateComments'
import Header from '../components/Header'
import { useGetData } from '../hooks/useGetData'
import { MainContainer } from '../style/StyleadMainContainer'
import { BASE_URL, HEADER} from '../constants/credentiais'
import axios from 'axios'
import Line from '../assets/Line.svg'
import { LineIMG2 } from '../style/StyleadCreateComments'
import CardComments from '../components/CardComments'
const PostPage = () => {
    const navigate = useNavigate()
    const [stateLike, setStateLike] = useState(false)
    // const [post, setPost] = useState({})
    const params = useParams()
    const { dados, loading, erro } = useGetData(stateLike, `/posts/${params.id}/comments`)
    const [likePost, setLikePost] =  useState(false)
    const [dislikePost, setDislikePost] = useState(false)
    useProtectedPage()
    
    // useEffect(() => {
    //   const postLocal = JSON.parse(localStorage.getItem("post"))
    //   postLocal && setPost(postLocal)
    // },[])

 

  const like = (id) => {
    if(likePost === true) {
     removeVotes(setLikePost, likePost, id)
     setLikePost(!likePost)
    } else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/comments/${id}/votes`, body, HEADER)
      .then((res) => {
        setLikePost(!likePost)
        setStateLike(!stateLike)
      })
      .catch((err) => {
        alert(err.response.data)
      })
    }

  }

  const dislike = (id) => {
    if (dislikePost===true) {
      removeVotes(setDislikePost,dislikePost,id)
      setDislikePost(!dislikePost)
    } else {
      const body = {
        direction: -1
      }
      axios.put(`${BASE_URL}/comments/${id}/votes`, body, HEADER)
      .then((res) => {
        setDislikePost(!dislikePost)
        setStateLike(!stateLike)
      })
      .catch((err) => {
        alert(err.response.data)
      })
    }
  }

  const removeVotes = (setVote, vote, id) => {
   axios.delete(`${BASE_URL}/comments/${id}/votes`, HEADER)
   .then((res) => {
    setVote(!vote)
    setStateLike(!stateLike)
   })
   .catch((err) => {
    alert(err.response.data)
   })
  }

  return (
    <MainContainer>
        <CardComments />
        <CreateComments stateLike={stateLike} setStateLike={setStateLike} params={params.id}/>
          <LineIMG2  src={Line} alt="Linha de divisão"/>
        <CardDetalhes dados={dados} loading={loading} erro={erro} stateLike={stateLike} setStateLike={setStateLike} params={params.id} like={like} dislike={dislike}/>
    </MainContainer>
  )
}
export default PostPage