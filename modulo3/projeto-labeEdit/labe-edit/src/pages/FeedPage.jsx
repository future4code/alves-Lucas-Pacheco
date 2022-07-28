import React, {useState, useEffect} from 'react'
import CardFeed from '../components/CardFeed'
import CardCreatePost from '../components/CardCreatePost'
import { useGetData } from '../hooks/useGetData'
import axios from 'axios'
import { BASE_URL, HEADER } from '../constants/credentiais'
export default function FeedPage() {
  const [stateLike, setStateLike] = useState(false)
  const { dados, loading, erro } = useGetData(stateLike,"/posts")
  const [likePost, setLikePost] =  useState(false)
  const [dislikePost, setDislikePost] = useState(false)

  const like = (id) => {
    if(likePost === true) {
     removeVotes(setLikePost, likePost, id)
     setLikePost(!likePost)
    } else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, HEADER)
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
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, HEADER)
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
   axios.delete(`${BASE_URL}/posts/${id}/votes`, HEADER)
   .then((res) => {
    setVote(!vote)
    setStateLike(!stateLike)
   })
   .catch((err) => {
    alert(err.response.data)
   })
  }

  return (
    <div>
        <CardCreatePost stateLike={stateLike} setStateLike={setStateLike} />

        <CardFeed dados={dados} loading={loading} erro={erro} stateLike={stateLike} setStateLike={setStateLike} like={like} dislike={dislike}/>
    </div>
  )
}
