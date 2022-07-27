import React, {useEffect, useState} from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetalhes from '../components/CardDetalhes'
import CreateComments from '../components/CreateComments'

import { useGetData } from '../hooks/useGetData'

const PostPage = () => {
    const navigate = useNavigate()
    const [stateLike, setStateLike] = useState(false)
    const [post, setPost] = useState({})
    const params = useParams()
    const { dados, loading, erro } = useGetData(stateLike, `/posts/${params.id}/comments`)
    useProtectedPage()
    
    useEffect(() => {
      const postLocal = JSON.parse(localStorage.getItem("post"))
      postLocal && setPost(postLocal)
    },[])

  return (
    <div>
        <p>Enviado por: {post.username}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <CreateComments stateLike={stateLike} setStateLike={setStateLike} params={params.id}/>

        <CardDetalhes dados={dados} loading={loading} erro={erro} stateLike={stateLike} setStateLike={setStateLike} params={params.id} />
    </div>
  )
}
export default PostPage